import mongoose from "mongoose";
//import dns from "dns";

// Use Google DNS to resolve MongoDB SRV records (fixes ECONNREFUSED on some ISPs)
//dns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI,
      {
        serverSelectionTimeoutMS: 30000
      }
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB Error Details:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;