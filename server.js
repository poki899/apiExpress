
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/csv.route")(app);

// set port, listen for requests
const PORT = 8082;
exports.server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});