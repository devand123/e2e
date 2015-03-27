var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    type_note: function (note) {
        browser.driver.findElement(by.id('user_email')).sendKeys(note);
        return browser.driver.sleep(3000);
    }

});
