import * as api from "../api";

/**
 * Fetch all employees action
 * @returns list of employees
 */
export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployees();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetch an employee by its ID
 * @param  id
 * @returns Employee with given ID
 */
export const getEmployeesById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployeeById(id);
    dispatch({ type: "FETCH_BY_ID", payload: data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Add an employee
 * @param  employeeData
 */
export const addEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.addEmployee(employee);
    dispatch({ type: "ADD", payload: data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Update an employee
 * @param {*} employeeId
 * @param {*} updatedData
 * @returns
 */
export const updateEmployee = (id, employee) => async (dispatch) => {
  try {
    const { data } = await api.updateEmployee(id, employee);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Delete an employee
 * @param employeeId
 * @returns
 */
export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.deleteEmployee(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
