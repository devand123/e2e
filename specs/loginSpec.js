describe("User Signup", function() {

    var page = require("../pageObjects/login.js");
    var data = require('../lib/data.js').data;

    beforeEach(function() {
    	isAngularSite(false);
        page.go("http://127.0.0.1:3000/users/sign_in");
    });

    it('should sign the user in', function () {
        page.enter_email(data.user.email);
        page.enter_password(data.user.password);
        page.login_button().click().then(function () {
            expect(element(by.id('index-page')).isPresent()).toBe(true);
        });
    });

});
