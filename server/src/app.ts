import express from "express";
import dotenv from "dotenv";
import { configureApp } from "./config/appConfig";
import { configureMiddleware } from "./config/configureMiddleware";


dotenv.config();

const app = express();

configureApp(app)
configureMiddleware(app)

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
});
