import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.set("view engine", "ejs")

//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use('/api/v1/users', userRouter)
app.use("/api/v1/users", userRouter)
app.get("/", (req, res) => {
    res.render('index')
})
app.get("/register", (req, res) => {
    res.render('register')
    })
app.get("/createpost", (req, res) => {
    res.render('create_post')
    })

// http://localhost:8000/api/v1/users/register

export { app }