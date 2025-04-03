import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//Initialize Express
const app = express()

//connect to db
await connectDB()

//Middleware
app.use(cors())

//Routes

app.get('/',(req,res)=>res.send("Api working"))
app.post('/clerk',express.json(),clerkWebhooks)
app.get("/favicon.ico", (req, res) => res.status(204).end());

//Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})