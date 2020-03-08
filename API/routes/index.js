const user = require('./user');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    apiRoutes() {
        this.app.use('/user-list', user);
    }
}

module.exports = app => {
    return new RouterIndex(app)
};