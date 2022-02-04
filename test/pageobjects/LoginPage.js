

const Page = require('./Page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('')
    }

    get inputPassword() {
        return $('');
    }

    get btnSubmit() {
        return $$('');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     login (username, password) {
      
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return browser.url('');
    }
}

module.exports = new LoginPage();
