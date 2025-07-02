import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://pavani23bce9863:Buddi06@cluster1.1dqcsoa.mongodb.net/foodie-app').then(()=>console.log("DB Connected"));
   
}