import { Resend } from "resend";
import { ENV } from "./env.js";

console.log("RESEND_API_KEY:", ENV.RESEND_API_KEY);

export const resendClient = ENV.RESEND_API_KEY
  ? new Resend(ENV.RESEND_API_KEY)
  : null;

export const sender = {
  email: ENV.EMAIL_FROM || "test@example.com",
  name: ENV.EMAIL_FROM_NAME || "Expense Tracker",
};