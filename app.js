require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const connectDB = require("./db/connect");
const mainRouter = require("./routes/main");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).send('<h1>Hello</h1><a href="/api/v1/products">Go To API</a>')
);

app.use(errorHandlerMiddleware);
app.use(notFound);

app.use("/api/v1/products", mainRouter);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log("Server Running on Port: ", port));
  } catch (error) {
    console.log(error);
  }
};

startServer();
