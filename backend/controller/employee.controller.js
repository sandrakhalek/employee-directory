import Employee from "../models/employee.model.js";

/**
 * Gets all Employees found in the database
 * @return list of employees
 */
export const getEmployee = async (req, res) => {
  try {
    const emp = await Employee.find();
    res.status(200).json(emp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Add an employee to the database
 * @param {*} req
 * @param {*} res
 */
export const addEmployee = async (req, res) => {
  const image = req.body.image;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const number = req.body.number;
  const departement = req.body.departement;
  const location = req.body.location;
  const title = req.body.title;

  const newEmployee = new Employee({
    image,
    firstName,
    lastName,
    title,
    departement,
    location,
    email,
    number,
  });

  try {
    await newEmployee.save();
    res.status(201).json("Employee added successfully!");
  } catch (error) {
    res.status(409).jsons({ message: error.message });
  }
};

/**
 * Update an employee based on an ID
 * @param {*} req
 * @param {*} res
 */
export const updateEmployee = async (req, res) => {
  try {
    const image = req.body.image;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const number = req.body.number;
    const departement = req.body.departement;
    const location = req.body.location;
    const title = req.body.title;

    await Employee.findByIdAndUpdate(req.params.id, {
      image,
      firstName,
      lastName,
      title,
      departement,
      location,
      email,
      number,
    });

    res.status(200).json("Employee Updated!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Delete an employee
 * @param {*} req
 * @param {*} res
 */
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee deleted!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Fetch an employee by his ID
 * @param {*} req
 * @param {*} res
 */
export const getSpecificEmployee = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    res.status(200).json(emp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Fetch employees based on specific category
 * @param {*} req
 * @param {*} res
 */
export const getEmployeeByCategory = async (req, res) => {
  try {
    const emp = await Employee.find()
      .where(req.params.key)
      .equals(req.params.value);

    res.status(200).json(emp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
