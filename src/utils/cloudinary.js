import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, id) => {
  try {
    if (!localFilePath) {
      return null;
    }

    // Upload the image
    const UploadResult = await cloudinary.uploader.upload(localFilePath, {
      public_id: id,
      resource_type: "auto",
    });
    console.log(UploadResult);
    console.log("File has been Uploaded Successfully",UploadResult.url);
    return UploadResult
  } catch (error) {

    fs.unlinkSync(localFilePath) // Removed the locally saved temporary file when the upload operation get failed
    console.error(error);
  }
};

export {uploadOnCloudinary}
