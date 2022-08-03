const nodemailer = required ('nodemailer')

const transporter = no
    service: "hotmail",
    auth: {
        user: "giocommerce@outlook.com",
        pass: "Jona1591@"
    }
});

const options = {
    from: "giocommerce@outlook.com",
    to: "ruthzota@gmail.com",
    subject: "You Got A Request",
    text: "A customer inquired about your factory, please contact them."

};

transporter.sendMail(options, callback function (err, info) {
    if(err) {
        console.log(err)
        return;
    }

    console.log("Sent: " + info.respose);
})