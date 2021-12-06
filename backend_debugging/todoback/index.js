const express = require("express");
const dotenv = require("dotenv");
require("./db/index");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
