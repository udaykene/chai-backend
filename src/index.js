// require('dotenv).config({path:'./env'}) 
import dotenv from 'dotenv'

import connect from './db/index.js'



dotenv.config({
    path:'./.env'
})


connect()


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