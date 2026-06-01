import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
};

console.log("ENV Loaded:", {
  EMAIL_FROM: ENV.EMAIL_FROM,
  EMAIL_FROM_NAME: ENV.EMAIL_FROM_NAME,
  HAS_RESEND_KEY: !!ENV.RESEND_API_KEY,
});