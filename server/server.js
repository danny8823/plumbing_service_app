import express from 'express'
import dotenv from 'dotenv'
import db from './db.js'
import User from './models/UserModel.js'
import authRoutes from './routes/auth-routes.js'
import { seedData } from './seed.js'

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/auth', authRoutes)
app.get('/', (req,res) => res.send('Server is ready'));

const runServer = async () => {
    try {
        await db.authenticate();
        await db.sync({force:true})
        await User.create({
            name: 'admin',
            password: 'admin',
            email: 'admin@email.com',
            isAdmin: true
        })
        console.log('DB connected and synced')
        await seedData()
        app.listen(port, () => {
            console.log('Server up on port:', port)
        })
    } catch(error) {
        throw new Error(error.message)
    }
}

runServer()