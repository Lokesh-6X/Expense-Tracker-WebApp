const express = require("express");
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use ("/api/users", require("./routes/authRoutes"));

// app.get("/", (req, res) => {
//   res.send("API running...");
// });

module.exports = app;