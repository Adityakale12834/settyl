import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employee_id :{
        type: String,
        required: true ,
        unique: true,
    },
    employee_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        require: true,
    },
    age:{
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    employee_status: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("Employee",employeeSchema);
export default User;