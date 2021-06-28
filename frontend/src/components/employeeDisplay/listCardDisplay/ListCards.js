import EmployeeCard from "../cardDisplay/EmployeeCard";

const ListCard = ({ employees, searchTerm }) => {
  return (
    <div>
      {employees
        .filter((e) =>
          searchTerm
            ? (e.firstName + " " + e.lastName)
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            : employees
        )
        .map((empl) => {
          return <EmployeeCard key={empl._id} employee={empl} />;
        })}
    </div>
  );
};

export default ListCard;
