import express from "express";
const router = express.Router();
import { setEmployeeDetails, getEmployeeDetails, updateEmployeeDetails } from "../controllers/employeeController.js";

router.post("/set",setEmployeeDetails);
router.put("/put",updateEmployeeDetails);
router.get("/get/:empId",getEmployeeDetails);

export default router;