const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});