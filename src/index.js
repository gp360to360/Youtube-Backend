import mongoose from "mongoose"
import  epxress from "express"

import connectDB from "./db/index.js";

import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 3000,() =>{
//         console.log(`Server is running at port: ${process.env.PORT}`);

//     })
// })
// .catch((err)=>{
//     console.log("MONGO db connection failed !! ",err);
// })











// const app = epxress()
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERRR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("ERROR",error);
//         throw err
//     }
// })()
