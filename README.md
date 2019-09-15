# Housing Inequality - Data Visualization
Our web app aims to shed light on housing inequality in the US through an interactive and engaging user interface that visualizes trends of various housing- and income-related quantities over time.

## Inspiration
In order to find a solution to the complex issue of housing inequality, we first need to understand its causes and effects. We built this data visualization app to make it easier for people (including us) to look objectively at the numbers and what they mean, and think critically about the forces that drive the housing inequality crisis.

## Deployment
To deploy the web application, run the following commands from the `visualizer-app` directory:
```
$ npm install
$ npm start
```

## Data Sources
We used the following datasets:
* [Zillow Real Estate Research](https://www.quandl.com/data/ZILLOW-Zillow-Real-Estate-Research) via Quandl
* [2018 AHAR - PIT Estimates of Homelessness in the U.S.](https://www.hudexchange.info/resource/5783/2018-ahar-part-1-pit-estimates-of-homelessness-in-the-us/) via HUD Exchange
* [Population, Population Change, and Estimated Components of Population](https://www.census.gov/data/tables/time-series/demo/popest/2010s-state-total.html) via US Census Bureau

### Retrieving Data
The processed data lives in the application, but if the data is updated, you can re-retrieve the data from the `data` directory:
```
$ pip install -r requirements.txt
$ python3 retrieve_data.py
```
This assumes the data is still in the same place (pulls from the locations mentioned above).
