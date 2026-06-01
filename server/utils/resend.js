import {Resend} from 'resend';
import {ENV} from "./env.js";

console.log("RESEND_API_KEY:", ENV.RESEND_API_KEY);
console.log(ENV.EMAIL_FROM);
console.log(ENV.EMAIL_FROM_NAME);

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
    email: ENV.EMAIL_FROM,
    name: ENV.EMAIL_FROM_NAME,
}
