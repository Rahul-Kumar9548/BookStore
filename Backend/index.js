import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

// import path, { dirname } from "path";


const app = express();
const PORT = process.env.PORT || 4000


dotenv.config();

app.use(cors());

app.use(bodyParser.json({ limit: "4kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "4kb" }));
app.use(express.static('public')); //To store the information that front end might provide

app.use(cookieParser());

// Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

// app.get("/",(req,res)=>{
//     res.send("API Working");
// })
// Deployment code:

// if(process.env.NODE_ENV === "Production"){
//     const dirPath = path.resolve();
//     app.use(express.static("Frontend/dist"));
//     app.get("*", (req,res)=>{
//         res.sendFile(path.resolve(dirPath, "Frontend", "dist", "index.html"));
//     })
// }

mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`)
    .then(() => {
        app.listen(PORT, () => {
            console.log("http://localhost:" + PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })