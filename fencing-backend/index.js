require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Connected to MongoDB");

      var corsOptions = {
        origin: "http://graydon.sk",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      };

      const app = express();
      app.use(cors(corsOptions));
      app.use(express.json());
      app.use("/api", routes);

      var database = mongoose.connection;

      database.on("error", (err) => {
        console.log(err);
      });

      app.listen(port, () => console.log(`Listening on port ${port}`));
    },
    (err) => {
      console.log(err);
    }
  );
