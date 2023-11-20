// external imports
const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  try {
    let db_data = await mongoose.connect(process.env.DB_URL, {
      //   these are options to ensure that the connection is done properly
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
    });
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  }
}

module.exports = dbConnect;
