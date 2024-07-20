import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express();

// app.use("/employee",)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});