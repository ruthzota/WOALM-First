const nodemailer = required ('nodemailer')

const transporter = nodemailer.createTransporter( transporter {
    service: "hotmail"
    auth: {
        user: "giocommerce@gmail.com"
        pass: "Jona1591@"
    }
})