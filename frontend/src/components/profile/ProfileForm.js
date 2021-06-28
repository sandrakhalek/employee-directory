import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, notification, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../../actions/employees";
import DeleteButton from "../delete/DeleteButton";
import ImageUpload from "./imageUpload/ImageUpload";
import "./ProfileForm.css";

const ProfileForm = ({ currentId }) => {
  const [isViewOnly, setViewOnly] = useState(false);
  const [emplData, setEmplData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    departement: "",
    location: "",
    number: "",
    title: "",
  });

  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    currentId ? state.employees.find((e) => e._id === currentId) : null
  );

  useEffect(() => {
    if (employee) setEmplData(employee);
    if (currentId) setViewOnly(true);
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      currentId ? updateEmployee(currentId, emplData) : addEmployee(emplData)
    );

    setViewOnly(true);
    notification["success"]({
      message: "Save",
      description: "The employee was saved successfully!",
    });
  };

  const handleImageChange = (value) =>
    setEmplData({ ...emplData, image: value });

  return (
    <div>
      <Divider>
        <ImageUpload value={emplData.image} onImageChange={handleImageChange} />
      </Divider>
      <Row>
        <Button
          type="link"
          onClick={() => setViewOnly(false)}
          icon={<EditOutlined />}
        >
          Edit
        </Button>
        <span className="seperator">|</span>
        <DeleteButton employee={currentId} dispatch={dispatch} />
      </Row>
      <form onSubmit={handleSubmit} method="POST">
        <Space className="formField" size="large">
          <Col className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Input
              size="large"
              className="form-control"
              type="text"
              readOnly={isViewOnly}
              value={emplData.firstName}
              onChange={(e) =>
                setEmplData({ ...emplData, firstName: e.target.value })
              }
              placeholder="John"
              required
            />
          </Col>
          <Col className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Input
              size="large"
              className=" "
              type="text"
              readOnly={isViewOnly}
              value={emplData.lastName}
              onChange={(e) =>
                setEmplData({ ...emplData, lastName: e.target.value })
              }
              placeholder="Doe"
              required
            />
          </Col>
        </Space>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <Input
            size="large"
            className="form-control"
            type="title"
            readOnly={isViewOnly}
            value={emplData.title}
            onChange={(e) =>
              setEmplData({ ...emplData, title: e.target.value })
            }
            placeholder="HR Manager"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departement">Departement</label>
          <Input
            size="large"
            className="form-control"
            type="departement"
            readOnly={isViewOnly}
            value={emplData.departement}
            onChange={(e) =>
              setEmplData({ ...emplData, departement: e.target.value })
            }
            placeholder="HR Departement"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
            size="large"
            className="form-control"
            type="email"
            readOnly={isViewOnly}
            value={emplData.email}
            onChange={(e) =>
              setEmplData({ ...emplData, email: e.target.value })
            }
            placeholder="johndoe@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <Input
            size="large"
            className="form-control"
            type="location"
            readOnly={isViewOnly}
            value={emplData.location}
            onChange={(e) =>
              setEmplData({ ...emplData, location: e.target.value })
            }
            placeholder="Beirut, Lebanon"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="number">Contact Number</label>
          <Input
            size="large"
            className="form-control"
            type="number"
            readOnly={isViewOnly}
            value={emplData.number}
            onChange={(e) =>
              setEmplData({ ...emplData, number: e.target.value })
            }
            placeholder="7557855"
            required
          />
        </div>

        <Button
          size="large"
          type="primary"
          htmlType="submit"
          disabled={isViewOnly}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
