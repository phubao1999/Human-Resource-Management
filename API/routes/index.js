const user = require('./user');
const notification = require('./notification');
const login = require('./login');
const contact = require('./contact');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    apiRoutes() {
        this.app.use('/user-list', user);
        this.app.use('/notifycation', notification);
        this.app.use('/login', login);
        this.app.use('/contact', contact);
    }
}

module.exports = app => {
    return new RouterIndex(app)
};