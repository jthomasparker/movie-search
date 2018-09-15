const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
}

// Start server
app.listen(PORT, () => console.log(`API Server listening on PORT ${PORT}`))