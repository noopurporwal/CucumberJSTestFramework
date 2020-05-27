const webDriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const TIMEOUT = 300000000

function driverSettings() {

chrome.setDefaultService( new chrome.ServiceBuilder( 
chromedriver.path ).build() )

const chromeCapabilities = webDriver.Capabilities.chrome()

const chromeOptions = { 'args': [ 'user-data-dir=/Users/user/selenium/bp/' ] }
chromeCapabilities.set( 'chromeOptions', chromeOptions )

const driver = new webDriver.Builder()
.withCapabilities( chromeCapabilities )
.build()

driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
TIMEOUT, script: TIMEOUT } )
    
return driver;
};

module.exports={driverSettings};
 