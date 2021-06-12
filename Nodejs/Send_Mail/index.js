let nodemailer = require('nodemailer');
const { mail, mailsent } = require('./configg');

let transporter = nodemailer.createTransport({
  service: mail.service,
  auth: {
    user: mail.auth.user,
    pass: mail.auth.pass
  }
});

let mailOptions = {
  from: mailsent.from,
  to: mailsent.to,
  subject: mailsent.subject,
  text: mailsent.text,
  html: mailsent.html        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});