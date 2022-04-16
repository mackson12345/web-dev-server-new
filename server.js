import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitController from "./controllers/tuit-controller.js";

// both my username and password uses cs5610.
process.env.DB_CONNECTION_STRING = 'mongodb+srv://cs5610:cs5610@cluster0.eo2wx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);
