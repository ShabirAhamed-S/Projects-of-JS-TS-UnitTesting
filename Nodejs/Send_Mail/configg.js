require('dotenv/config')

let mail = {
  service: process.env.service,
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
}
let mailsent = {
  from: mail.auth.user,
  to: 'cssshabirahamed@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi Smartherd, thank you for your nice Node.js tutorials.
          I will donate 50$ for this course. Please send me payment options.`,
  html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
};

// let mailsent = {
//   from: mail.auth.user,
//   to: 'cssshabirahamed@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: `Hi Smartherd, thank you for your nice Node.js tutorials.
//           I will donate 50$ for this course. Please send me payment options.`,
//   html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
// };

module.exports = {
  mail,
  mailsent
}