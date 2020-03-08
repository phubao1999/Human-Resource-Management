const user = require('./user');
const notification = require('./notification');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    apiRoutes() {
        this.app.use('/user-list', user);
        this.app.use('/notification', notification);
    }
}

module.exports = app => {
    return new RouterIndex(app)
};