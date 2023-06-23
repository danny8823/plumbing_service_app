import express from 'express'
import Services from '../models/ServicesModel.js'

const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const services = await Services.findAll()
        res.send(services)
    } catch (error) {
        next(error.message)
    }
})

export default router