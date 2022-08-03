const nodemailer = required ('nodemailer')

const transporter = nodemailer.createTransporter( transporter {
    service: "hotmail",
    auth: {
        user: "giocommerce@outlook.com",
        pass: "Jona1591@"
    }
});

const options = {
    from: "node"
}