import xlrd
import json
from state_abbrs import state_abbrs
import urllib.request
import quandl
import csv
import codecs

quandl.ApiConfig.api_key = "ziDHmPs2CC5KeCoc61Vj"

def parse_homelessness_data(filename):
	# Homelessness data from HUD Exchange
	# Population data from US Census Bureau
	print('Retrieving homelessness data...')

	tempfile, _ = urllib.request.urlretrieve('https://www.hudexchange.info/resources/documents/2007-2018-PIT-Counts-by-State.xlsx')
	book = xlrd.open_workbook(tempfile)

	tempfile2, _ = urllib.request.urlretrieve('https://www2.census.gov/programs-surveys/popest/tables/2010-2018/state/totals/nst-est2018-01.xlsx')
	book2 = xlrd.open_workbook(tempfile2)

	obj = {}
	for year in range(2010, 2019):
		sheet = book.sheet_by_name(str(year))
		col = 3 + (year - 2010) 	# years start from column 3

		homelessness = {}
		population = {}

		# get homelessness values
		for row in sheet.get_rows():
			state = row[0].value

			if state not in state_abbrs.values():
				# skip header and footer rows
				continue
			
			homelessness[state] = row[2].value

		# get population values
		for row in book2.sheet_by_index(0).get_rows():
			state = row[0].value
			
			# strip leading .
			if state and state[0] == '.': 
				state = state[1:]

			if state not in state_abbrs:	 # skip header and footer rows
				continue

			population[state_abbrs[state]] = row[col].value

		for state in homelessness:
			if state not in population:
				continue

			obj.setdefault(state, []) 	# initialize empty list for each state
			obj[state].append({'x': year, 'y': homelessness[state] / population[state]}) 

	with open(filename, 'w') as f:
		json.dump(obj, f)

	print('Done.')

def get_housing_data(filename):
	# Housing price data from Zillow via Quandl
	print('Retrieving housing data...')

	code_to_state_abbr = construct_codes_to_state_abbrs()

	obj = {}
	for st in range(2, 53):	# states range from 2 to 52 (including DC)
		data = quandl.get("ZILLOW/S" + str(st) + "_MLPAH", collapse="annual")

		points = []
		for index, row in data.iterrows():
			item = {'x': index.year, 'y': int(row['Value'])}
			points.append(item)

		obj[code_to_state_abbr[st]] = points

	with open(filename, 'w') as f:
		json.dump(obj, f)

	print('Done.')

def construct_codes_to_state_abbrs():
	# Codes come from Quandl dataset specification. See
	# https://www.quandl.com/data/ZILLOW-Zillow-Real-Estate-Research/documentation
	response = urllib.request.urlopen('https://s3.amazonaws.com/quandl-production-static/zillow/state.txt')
	reader = csv.DictReader(codecs.iterdecode(response, 'utf-8'), delimiter='|')

	result = {}
	for row in reader:
		try:
			result[int(row['CODE'])] = state_abbrs[row['AREA']]
		except KeyError:
			result[int(row['CODE'])] = row['AREA']	# keep unabbreviated form
	return result

if __name__ == '__main__':
	parse_homelessness_data('homelessness_data.json')
	get_housing_data('housing_data.json')