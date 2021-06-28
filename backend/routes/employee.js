import express from "express";
import {
  getEmployee,
  getSpecificEmployee,
  getEmployeeByCategory,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../controller/employee.controller.js";

const router = express.Router();
router.get("/", getEmployee);
router.get("/:id", getSpecificEmployee);
router.get("/:key/:value", getEmployeeByCategory);
router.post("/add", addEmployee);
router.post("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
