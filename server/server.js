import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRouters.js'
      
//Initialize Express
const app = express()

//connect to db
await connectDB()
await connectCloudinary()

//Middleware
app.use(cors())
app.use(clerkMiddleware())

app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

app.use(express.json()) 

//Routes

app.get('/',(req,res)=>res.send("Api working"))
app.post('/clerk',clerkWebhooks)
app.use('/api/educator',educatorRouter)
app.use('/api/course',courseRouter)
app.use('/api/user',userRouter)
//Port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})