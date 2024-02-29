const mongoose = require("mongoose");

const connectDB = async (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("DB Running"))
    .catch((err) => console.log(err));
};

module.exports = connectDB