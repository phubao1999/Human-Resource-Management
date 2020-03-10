const user = require('./user');
const notification = require('./notification');
const login = require('./login');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    apiRoutes() {
        this.app.use('/user-list', user);
        this.app.use('/notifycation', notification);
        this.app.use('/login', login);
    }
}

module.exports = app => {
    return new RouterIndex(app)
};