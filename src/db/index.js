// we are connect the database in this file and will export it to the index.js(real file)
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// this connection with database will be used in many other sections like in video controllers etc so we dont need to use this
// everytime if we make a wrapper function in utils file and use that function everytime whenever we need a connection with database
// (asyncHandler.js)
// ---------------------------------------------------------------------------------------------------------------------------------


// to connect db always remember to use try catch(or promises because it also allows us to catch errors) and async await

const connectDB = async ()=> {
    try{
        // mongoose allows us to store the return in a variable 
        // connectionInstance stores the response of the database connection
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.Connection.host}`)
    }
    catch(error){
        console.error("MONGODB CONNECTION FAILED HO CHUKA HAI:",error);
        // throw err
        process.exit(1);
    }
}

export default connectDB