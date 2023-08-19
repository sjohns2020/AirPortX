const express = require("express");
const cors = require("cors")

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my API.  Go to /api/tutorials to see all tutorials." });
});

// Created a resueable router for any table in the database. 
const createRouter = require("./routes/router.js")

// Tutorials
const tutorials = require("./controllers/tutorial.controller.js");
const turoialsRouter = createRouter(tutorials);
app.use('/api/tutorials', turoialsRouter);
// Flights
const flights = require("./controllers/flight.controller.js");
const flightsRouter = createRouter(flights);
app.use('/api/flights', flightsRouter);




// require("./routes/tutorial.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

