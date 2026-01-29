import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref:"User",
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    videoFile: {
      type: String, //Clodinary Url
      required: true,
    },
    duration: {
      type: Number,// cloudinary
      required:true,
    },
    description: {
      type: String, 
      required:true
    },
    views:{
      type:Number,
      default:0,
    },
    isPublished:{
      type:true,

    }
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema);
