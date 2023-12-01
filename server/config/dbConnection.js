const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://ChiragRajBR:Chirag11@cluster0.qoczuz9.mongodb.net/menuScreen"
    )
    .then(() => {
      console.log("connected to server");
    })
    .catch(() => {
      console.log("not connected");
    });
};

module.exports = dbConnection;
