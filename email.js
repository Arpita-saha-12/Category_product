const nodemailer = require('./node_modules/nodemailer/lib/nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sahaarpita505@gmail.com',
    pass: ''
  }
});

const mailOptions = {
  from: 'sahaarpita505@gmail.com',
  to: 'sahadikshitaarpita@gmail.com',
  cc:'sahaarpita505@gmail.com',
  date: 'date.now',
  subject: 'Sending Email using Node.js',
  text: 'Hello !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

