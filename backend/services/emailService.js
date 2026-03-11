import nodemailer from "nodemailer";

export const sendEmail = async (email, summary) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Sales Insight Report",
    html: `
      <div style="font-family: Arial, sans-serif; padding:20px">
        <h2>📊 Sales Insight Executive Report</h2>
        <hr/>
        <pre style="white-space: pre-wrap; font-size:14px">
${summary}
        </pre>
      </div>
    `,
  });
};
