const nodemailer = require("nodemailer");
const { config } = require("dotenv");
config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.PASSWORD,
  },
});
const sendMail = (req, res) => {
  let mailOptions = {
    from: "sy241527@gmail.com", // Sender address
    to: req?.body?.email, // List of recipients
    subject: "mail sent by " + req?.body?.name,
    html: `<h1>Hey this mail is recieved from your portfolio website</h1>
        <h2>This message is send by ${req?.body?.email}</h2>
        <h3> Message </h3>
        <p>${req?.body?.message}</p>
        <h3> Contact no: ${req?.body?.phone}</h3>

    
    `, // HTML body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return err;
    res.status(201).json({
      message: "Message send successfully",
    });
  });
};
module.exports = { sendMail };
