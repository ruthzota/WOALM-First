const nodemailer = required ('nodemailer')

const transporter = nodemailer.createTransporter( transporter {
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
    text: "A customer inquired about your factory, "


}