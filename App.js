const dbConnect = require("./db/dbConnect");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const appRoutes = require("./routes/app.routes");

app.listen(8000, () => {
  console.log(`Server Started at ${8000}`);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// execute database connection
dbConnect();

// execute App routes
app.use("/app", appRoutes);
