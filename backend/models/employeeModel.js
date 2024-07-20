import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employee_id :{
        type: String,
        required: [true, "The employee id is required" ],
        unique: true,
    },
    employee_name: {
        type: String,
        required: [true, "The Employee Name is Necessary" ],
    },
    address: {
        type: String,
        require: [true, "The address is neccessary" ],
    },
    age:{
        type: Number,
        required: [true, "The age is required" ],
    },
    department: {
        type: String,
        required: [true, "The department is required field"],
    },
    emplyee_status: {
        type: String,
        required: [true, "The Employee Name is necessary" ],
    }
});

const User = mongoose.model("Employee",employeeSchema);
export default User;