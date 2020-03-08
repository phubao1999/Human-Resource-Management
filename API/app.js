const express = require('express');
const app = express();
const mongo = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const routersIndex = require('./routes')(app);

mongo.connect(process.env.DB_CONNECTION, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
});
const db = mongo.connection;
if (!db) {
    console.log('There Is No Data');
} else {
    console.log('MongoDB Is Connecting');
}

app.get('/', (req, res) => {
    res.send('Welcome To My Web Server');
});

// Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: false
}));

// Setup Routes
routersIndex.apiRoutes();

app.listen(port, () => {
    console.log(`Server Is Listening In Port ${port}`);
});