import transporter from "../utils/mailer.js";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  try {
    console.log("Sending email to:", email);
    console.log("CLIENT_URL =", clientURL);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Expense Tracker!",
      html: createWelcomeEmailTemplate(name, clientURL),
    });

    console.log("Welcome Email sent successfully");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};
