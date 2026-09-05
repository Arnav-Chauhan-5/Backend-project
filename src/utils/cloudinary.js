import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
// fs is file system 

// this cloudinary configuration which gives the user permission to upload the files by using these secrets
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


// first we take the files from the user and save those files in our server for temp  and after we uplaod those files in the 
// cloudinary then if files are safely uploaded to the cloudinary then we unlink the files from the servers we stored and if not 
// uploaded then we can re upload the files directly from the servers

// this is our custom method where we can upload the files to cloudinary and unlink the files in our servers afterwords
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}