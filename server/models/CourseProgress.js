import mongoose from "mongoose";

const courseProgressSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    courseId:{type:String,required:true},
    completed:{type:Boolean,deafult:false},
    lectureCompleted:[]
},{minimize:false});

export const courseProgress = mongoose.model('CourseProgress',courseProgressSchema)