const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const port = process.env.PORT || 4000;

mongoose
  .connect(
    "mongodb+srv://glask123:graydon123@gsk.wcdod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      console.log("Connected to MongoDB");

      const app = express();
      app.use(cors());
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
