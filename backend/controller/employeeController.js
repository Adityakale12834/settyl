import mongoose from "mongoose";
import { Employee } from "../models/employeeModel";

const getEmployeeDetails = async (req,res) => {
    try {
        const bodyData = req.body;
        
    } catch (error) {
        console.log(error);
        res.status(503).json({message:"The unknown Error happened in Database"});
    }
}