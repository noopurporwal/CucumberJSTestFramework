# CucumberJSTestFramework

This is a BDD test framework made in Cucumber JS. It uses selenium webdriver for all the browser based testing for your web application.

To get this framework running, keeping in mind the assumptions, follow the below given steps to get it going.

Assumptions:
You have node js and npm installed

Steps:
1) Create a Project folder - ./CucumberTestFramework at any location in your system
2) Go to the above specified folder in cmd 
3) "npm init -y" - This will initialise a node js in the project folder to get any node dependencies
4) "npm install  --save-dev cucumber" to download cucumber dependency for node
5) "npm install selenium-webdirver chromedriver assert" to get all the required dependencies to run our project
6) open package.json file and add the below key value pair to it to it
  "scripts": {
    "test": "./node_modules/.bin/cucumber-js"
  }
7) clone the git repo in this folder
8) Give this command in cmd to run all our test:
  ./node_modules/.bin/cucumber-js
