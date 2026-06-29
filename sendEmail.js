import fs from "fs";
import nodemailer from "nodemailer";
import "dotenv/config";

const user = process.env.AUTH_USER;
const pass = process.env.AUTH_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

const html = fs.readFileSync("./dist/promotional.html", "utf8");

await transporter.sendMail({
  from: user,
  to: user,
  subject: "MJML Test",
  html,
});

console.log("Email sent!");
