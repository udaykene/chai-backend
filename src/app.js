import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true,
})) // This middleware is used to share cross origin data from two different ports


app.use(express.json({limit:"16kb"})) // this accept the json data in the app {limit defines the size of data you accept} 
app.use(express.urlencoded({extended:true})) // this defines the data coming from url is encoded {extended defines it can pass objects also }

app.use(express.static('public')) // this helps in defining the public folder where all static files can be stored
app.use(cookieparser()) // This helps in parsing cookies 



// routes
import userRoute from './routes/user.routes.js'



app.use('/api/v1/users',userRoute)


export {app}