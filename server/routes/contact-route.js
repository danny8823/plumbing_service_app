import express from 'express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()
const router = express.Router()

// const contactEmail = nodemailer.createTransport({
//     service: 'yahoo',
//     auth: {
//         user: "doyou714@yahoo.com",
//         pass: process.env.EMAIL_PASS
//     }
// })

// contactEmail.verify((error) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log('ready to send')
//     }
// })
export default router