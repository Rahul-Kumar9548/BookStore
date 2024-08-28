import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";


const app = express();
const PORT = process.env.PORT || 4000


dotenv.config();

app.use(cors({
    origin: ["https://mern-project-1-ashy.vercel.app/", "http://localhost:4000"]
}));

app.use(bodyParser.json({ limit: "4kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "4kb" }));
app.use(express.static('public')); //To store the information that front end might provide

app.use(cookieParser());

// Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`)
    .then(() => {
        app.listen(PORT, () => {
            console.log("http://localhost:" + PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })