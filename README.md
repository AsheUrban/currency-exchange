# Currency-Exchange

#### Week 6 Independent project showcasing new skills with APIs.

#### By Ashe Urban

## Technologies Used

* _JavaScript_
* _jQuery_
* _HTML_
* _Markdown_
* _API Key_

## Description
_"A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API."_

_link to project details:_ https://epicenter.epicodus.com/courses/967/code_reviews/5854 

_Link to project in github:_ https://github.com/AsheUrban/currency-exchange.git

_Link to ExchangeRate API sign-up:_ https://www.exchangerate-api.com/

## Setup/Installation Requirements

* Visit ExchangeRate-API _(link above)_
* Sign up to recieve a free key
* Clone or dl project from github _(link above)_
* Create .env file in root directory, add API_KEY=YOUR API KEY GOES HERE _(see note 1. below)_
* Add .env file to github before pushing any changes!
* Use ${process.env.API_KEY} to call on your key where needed _(see note 2. below)_
* Once any necessary updates are made, npm run install
* Once installed, npm run build

### Notes: 
1. API_KEY= must adhere to this capitalization/format!
2. EX: https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/CLP/10

## Known Bugs

* _None_

## License
* MIT

## Contact Information
_Please contact me with any questions or contribuitions, ashe@goldentongue.com_

_Copyright(c)_ _July 2022_ _Ashe Urban_