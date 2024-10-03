import express from 'express'
import { bookingRouter } from './routes/all-routes.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'

const app = express()

const PORT = 7079

app.use(cors())
app.use(express.json())
app.use(bookingRouter)


await mongoose.connect(process.env.MONGO_URI)
app.listen(PORT,() => {
    
    console.log(`Server is listening on ${PORT}`)
})

