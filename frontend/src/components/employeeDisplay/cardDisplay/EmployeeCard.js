import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Row, Space } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "../../delete/DeleteButton";
import ProfileDrawer from "../../drawer/Drawer";
import "./EmployeeCard.css";

const { Meta } = Card;

function EmployeeCard({ employee }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const fName = employee.firstName;
  const lName = employee.lastName;
  const title = employee.title;
  const departement = employee.departement;
  const location = employee.location;
  const image = employee.image;

  const emplTitle = fName + " " + lName + ", " + title;
  const description = departement + "\n" + location;

  return (
    <div>
      <Card className="card">
        <Space>
          <Avatar
            className="avatar"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 120 }}
            icon={<UserOutlined />}
            src={image}
          />
          <Meta
            title={emplTitle}
            description={description}
            style={{ whiteSpace: "pre" }}
          />
        </Space>

        <Row className="buttonsLayout">
          <Button
            type="link"
            onClick={() => {
              setCurrentId(employee._id);
              showDrawer();
            }}
          >
            View Details
          </Button>

          <DeleteButton employee={employee._id} dispatch={dispatch} />
        </Row>
      </Card>
      <ProfileDrawer
        visible={visible}
        currentId={currentId}
        onClose={closeDrawer}
      />
    </div>
  );
}

export default EmployeeCard;
