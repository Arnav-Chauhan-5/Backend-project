import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: './env'
})

// this connectDb comes from an asyncs function which always return an promise so use .then .catch 
connectDB()
// until now only the mongodb is connected and our application has not listened to it so we will be doing that
.then(() =>{
    app.listen(process.env.PORT||8000,() =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) =>{
    console.log("MONGODB CONNECTION FAILED !!!",error);
})