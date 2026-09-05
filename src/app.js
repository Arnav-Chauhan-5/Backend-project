import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors());  to configure cors  OR
// CORS - which urls are allowed to access our backend (something like this and also covers Whitelisting and proxy)

app.use(cors({
    origin: process.env.CORS_ORIGIN
    // CORS_ORIGIN in env
}))

// data can comes in many forms like images,videos, json format
// this express.json allows the quantity of json data can be accepted 
app.use(express.json({limit : "16kb"}));

// data in the form of url
app.use(express.urlencoded({limit : "16kb"}));

// if we want to store something int the server then we can use this -
app.use(express.static("public"));
// public refers to the temp folder we created in this project 

app.use(cookieParser());

export {app}