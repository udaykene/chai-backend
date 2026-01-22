// require('dotenv).config({path:'./env'})
import dotenv from "dotenv";

import connect from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connect()
  .then(() => {
    app.on("Error", (error) => {
      console.log("Err", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed !!", err);
  });

/*

Traditional Approach to connect with database

import express from 'express'
const app = express();
;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        app.on('error',(error) => {
            console.log("Error :",error);
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is listening in port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error :",error);
        throw error
    }
})()
*/
