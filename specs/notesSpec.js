describe("Notes", function() {

    var page = require("../pageObjects/notes.js");
    var data = require('../lib/data.js').data;

    beforeEach(function() {
    	isAngularSite(false);
        page.go("http://127.0.0.1:3000/companies/451");
    });


    it('should type a note', function () {
        page.type_note('here is my note!');
    });

});
