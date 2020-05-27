const { Given, When, Then, AfterAll, setDefaultTimeout,setTimeOut, After } = require('cucumber');
const webDriver = require('selenium-webdriver');
const {driverSettings} = require('../driverSettings');
const assert = require('assert');

setDefaultTimeout(60 * 1000);

 let By= webDriver.By;
 const until=webDriver.until;
 let driver= driverSettings();
 

Given('We are at home Page', async function () {
    await driver.get('http://automationpractice.com/index.php');
});

Then('Verify the presence of {string} element', async function (string) {
    
    driver.manage().setTimeouts({implicit:5000}) ;
    const headerElement = await driver.findElement(By.id(string))
    .then(function(element) {
        console.log(string+" present");
       })
    .catch((err) => {
        if (err instanceof webDriver.error.NoSuchElementError) {
         console.log("The error is "+ err.name);
         } 
         assert.fail("The test failed because of this error" + err);
    })
   
});

When('I open {string}', async function (string) {
    driver.wait(until.elementLocated(By.xpath("//a[contains(@title,'"+string+"')]"))).click();
    console.log(string+ "Page opened")    
})

When('Enter the email id {string} in Newletter field', async function(string) {
    const element=await driver.wait(until.elementLocated(By.xpath("//input[@id='newsletter-input']")))
    element.sendKeys(string);
    driver.findElement(By.xpath("//button[@name='submitNewsletter']")).click()
})

Then('Verify if the user has been subscribed', async function() {
     driver.manage().setTimeouts({implicit:5000}) ;
     await driver.wait(until.elementLocated(By.xpath("//p[contains(@class,'alert')]")))
    .getText()
    .then(textValue => {
        console.log(textValue);
        assert.equal('Newsletter : You have successfully subscribed to this newsletter.', textValue)
    })
    .catch((err) => {
        const element= driver.findElements(By.xpath("//p[contains(@class,'alert-danger')]"))
         .then(element => {
             if(element.length>0) {
                console.log("The user has already been subscribed");
         }
         })
         assert.fail("The Test failed because of" + err);      
        
     })
})

When('Navigate to Summer->Dresses->Summer Dresses', async function () {
    const element = await driver.findElement(By.xpath("//li//a[@title='Women']"))
    .then(async (element) => {
        console.log(element);
    await driver.actions().move({origin: element}).click(driver.findElement(By.xpath("//li//a[@title='Women']/..//li//a[@title='Summer Dresses']"))).perform(); })
    .catch((err) => {
        if (err instanceof webDriver.error.NoSuchElementError) {
         console.log("The error is "+ err.name);
         } 
         assert.fail("The test failed because of this error" + err);
    })
})

Then('Verify if the navigation was successful', async function() {
     driver.manage().setTimeouts({implicit:5000}) ;
     driver.findElement(By.xpath("//h1//span[contains(text(),'Summer Dresses')]"))
    .then(() => {
        console.log("Successfully navigated to Summer Dresses Page");
    })
    .catch((err) => {        
        assert.fail("The Test failed because of" + err);      
        })
})

When('Apply any filter {string}', async function(string) {
    await driver.findElement(By.xpath("//a[contains(text(),'"+string+"')]/..//..//input")).click();
    console.log(string+ "Filter Applied")
})

Then('Verify if the listing is filtered/sorted', async function() {
    const element=await driver.findElements(By.xpath("//ul[contains(@class,'product_list')]/li"))
    .then(element => {
        console.log("Filter functionality is working fine")        
        assert.equal(3, element.length,);
    })
    .catch((err) => {
        console.log("The filter functionality is not working fine")
        assert.fail("The Test failed because of" + err);      
        
     })
})

When('Apply sorting with {string}', async function(string) {
    driver.sleep(5000);
    await driver.findElement(By.xpath("//select[@id='selectProductSort']/option[contains(text(),'"+string+"')][1]")).click();
    console.log(string+ "Sorting Applied")
})

When('Add an item to cart', async function() {
    
    const element = await driver.findElement(By.xpath("//ul[@id='homefeatured']//li[1]/div"))
    .then(async (element) => {
    console.log(element);
    await driver.actions().move({origin: element}).click(driver.findElement(By.xpath("//span[text()='Add to cart']"))).perform();
    await driver.wait(until.elementLocated(By.xpath("//span[contains(text(),'Proceed to checkout')]"))).click();   
    console.log("Proceeded to checkout from homepage");
    })
    .catch((err) => {
        if (err instanceof webDriver.error.NoSuchElementError) {
         console.log("The error is "+ err.name);
         } 
         assert.fail("The test failed because of this error" + err); 
    })

})

Then('Verify if the item was shown in the cart', async function() {
    await driver.wait(until.elementLocated(By.xpath("//span[@id='summary_products_quantity']")))
    .getText()
    .then(textValue => {
        console.log(textValue);
        assert.equal('1 Product', textValue)
    })
    .catch((err) => {
        assert.fail("The Test failed because of" + err);
})
})

AfterAll( async function(){
    driver.close();
    driver.quit();
})