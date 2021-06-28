export default (employees = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_BY_ID":
      return action.payload;
    case "ADD":
      return [...employees, action.payload];
    case "UPDATE":
      return employees.map((emp) =>
        emp._id === action.payload._id ? action.payload : emp
      );
    case "DELETE":
      return employees.filter((emp) => emp._id !== action.payload);
    default:
      return employees;
  }
};
