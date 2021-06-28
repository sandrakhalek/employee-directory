import { Select } from "antd";

const { Option } = Select;

const Dropdown = () => {
  return (
    <Select defaultValue="Sort" bordered={false}>
      <Option value="A-Z">A-Z</Option>
    </Select>
  );
};

export default Dropdown;
