import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, notification } from "antd";
import { deleteEmployee } from "../../actions/employees";

const DeleteButton = ({ employee, dispatch }) => {
  const onClick = () => {
    Modal.confirm({
      title: "Warning",
      content: "Are you sure you want to delete this employee?",
      onOk() {
        if (employee) dispatch(deleteEmployee(employee));
        notification["success"]({
          message: "Delete",
          description: "The employee was deleted successfully!",
        });
      },
    });
  };

  return (
    <Button type="link" onClick={onClick} icon={<DeleteOutlined />} danger>
      Delete
    </Button>
  );
};

export default DeleteButton;
