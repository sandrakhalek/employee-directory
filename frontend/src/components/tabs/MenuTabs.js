import { Tabs } from "antd";
import { useSelector } from "react-redux";
import Tags from "../tags/Tags";
import ListCards from "../employeeDisplay/listCardDisplay/ListCards";
import "./MenuTabs.css";
import { useEffect, useState } from "react";
import axios from "axios";

const { TabPane } = Tabs;
const MenuTabs = ({ searchTerm }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [tab, setTab] = useState("");

  const getEmployeesByCat = (key, value) => {
    axios({
      method: "GET",
      url: "http://localhost:5000/employee/" + key + "/" + value,
    })
      .then((response) => {
        setEmployeeList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEmployeesByCat(tab, selectedTag);
  }, [selectedTag, tab]);

  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      centered
      onChange={(t) => setTab(t.toLowerCase())}
    >
      <TabPane tab="All" key="all">
        <ListCards
          employees={useSelector((state) => state.employees)}
          searchTerm={searchTerm}
        />
      </TabPane>
      <TabPane tab="Departement" key="departement">
        <Tags
          tags={[
            "HR Departement",
            "IT Departement",
            "Tech Departement",
            "Marketing Departement",
          ]}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <ListCards employees={employeeList} searchTerm={searchTerm} />
      </TabPane>
      <TabPane tab="Location" key="location">
        <Tags
          tags={["Lebanon", "New York"]}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <ListCards employees={employeeList} searchTerm={searchTerm} />
      </TabPane>
      <TabPane tab="Job Title" key="title">
        <Tags
          tags={[
            "Junior Developer",
            "HR Specialist",
            "IT Officer",
            "Senior Developer",
            "Management",
            "Finance",
          ]}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <ListCards employees={employeeList} searchTerm={searchTerm} />
      </TabPane>
    </Tabs>
  );
};

export default MenuTabs;
