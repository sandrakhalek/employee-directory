import axios from "axios";

const url = "http://localhost:5000/employee/";

export const fetchEmployees = () => axios.get(url);
export const addEmployee = (newEmpl) => axios.post(url + "add", newEmpl);
export const fetchEmployeeById = (id) => axios.get(url + id);
export const fetchEmployeeByCategory = (key, value) =>
  axios.get(url + key + "/" + value);

export const deleteEmployee = (id) => axios.delete(url + id);
export const updateEmployee = (id, updatedEmpl) =>
  axios.post(url + id, updatedEmpl);
