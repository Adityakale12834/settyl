import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import employeeRoute from "./routes/employeeRoute.js"

const app = express();

app.use(express.json());

app.use("/",employeeRoute);

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("Database connected succesfully"))
.catch((e) => console.log("Error in Connecting to the database",e));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});