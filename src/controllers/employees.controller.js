import Employee from "../models/employee.model.js";
import logModel from "../models/log.model.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { method, path } = req;
    const newLog = new logModel({
      action: `${method} ${path}`,
      ip,
    });
    await newLog.save();
    res.json(employees);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const newEmployee = new Employee({
      name,
      description,
      date,
    });
    await newEmployee.save();
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { method, path } = req;
    const newLog = new logModel({
      action: `${method} ${path}`,
      ip,
    });
    await newLog.save();
    res.json(newEmployee);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee)
      return res.status(404).json({ message: "Employee not found" });
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const { method, path } = req;
      const newLog = new logModel({
        action: `${method} ${path}`,
        ip,
      });
      await newLog.save();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const employeeUpdated = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      { name, description, date },
      { new: true }
    );
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { method, path } = req;
    const newLog = new logModel({
      action: `${method} ${path}`,
      ip,
    });
    await newLog.save();
    return res.json(employeeUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    return res.json(employee);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};