import User from "../models/employeeModel.js";
import { v4 as uuidv4 } from 'uuid';

export const getEmployeeDetails = async (req,res) => {
    try {
        const empId = req.params['empId'];

        const response = await User.find({
            employee_id:empId,
        });

        res.status(200).json({Message:"The data Fetched Succesfully",Data : response});

    } catch (error) {
        console.log(error);
        res.status(503).json({message:"The unknown Error happened in Database"});
    }
}

export const setEmployeeDetails = async (req, res) => {
    try {
        const bodyData = req.body;
        // console.log(bodyData);
        const { EmpName, address, age, department, empStatus} = bodyData;
        const empId = uuidv4();
        console.log(EmpName);
        console.log(empId);
        const response = await User.create({
            employee_id:empId,
            employee_name:EmpName,
            address:address,
            age:age,
            department:department,
            employee_status:empStatus
        });

        res.status(200).json({Message:"The data Inserted Succesfully",Data :response});

    } catch (error) {
        console.log(error);
        res.status(503).json({Message:"There is problem in the database", Error:error});
    }
}

export const updateEmployeeDetails = async (req,res) => {
    try {
        const bodyData = req.body;
        // const {empId, EmpName, address, age, department, empStatus} = bodyData;
        
        const filter = {employee_id : bodyData.employee_id};
        const update = bodyData;
        console.log("this is filter",filter, "this is update",update);
        const response = await User.findOneAndUpdate(
            filter,update);

        if(!response){
            return res.status(404).json({ Message: "Employee not found", Date:response });
        }

        res.status(200).json({Message:"The data Updated Succesfully",Data :response});
    } catch (error) {
        console.log(error);
        res.status(503).json({Message:"There is problem in the database", Error:error});
    }
} 

export default {getEmployeeDetails, setEmployeeDetails,updateEmployeeDetails};