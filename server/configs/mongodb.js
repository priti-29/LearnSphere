import mongoose from "mongoose";

//connect to the mongodb database

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/learnsphere`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // ⏳ Timeout in 5 seconds
    });
}
export default connectDB