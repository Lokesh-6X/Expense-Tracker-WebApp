const express = require("express");
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));

// app.get("/", (req, res) => {
//   res.send("Expense Tracker API Running...");
// });

module.exports = app;