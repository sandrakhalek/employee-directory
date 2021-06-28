import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "./actions/employees";
import Header from "./components/header/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return <Header title={"Employee\nDirectory"} />;
};

export default App;
