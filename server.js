require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./server/routes')
const app = express();
const PORT = process.env.PORT || 3001;
const TITLES_DB = process.env.TITLES_DB_URI
const mongoose = require('mongoose')

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
}

mongoose.connect(TITLES_DB, { useNewUrlParser: true })
                .then(() => console.log("Mongoose connected to Titles db"))
                .catch(err => console.log(err))

// Start server
app.listen(PORT, () => console.log(`API Server listening on PORT ${PORT}`))