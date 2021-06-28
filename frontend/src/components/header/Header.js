import { PlusOutlined } from "@ant-design/icons";
import { Button, Row, Space, Typography } from "antd";
import { useState } from "react";
import SearchInput from "../searchBar/Search";
import MenuTabs from "../tabs/MenuTabs";
import ProfileDrawer from "../drawer/Drawer";
import "./Header.css";

const { Title } = Typography;

const Header = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <>
      <Row className="header">
        <Title className="headerTitle" level={3}>
          {title}
        </Title>
        <Space>
          <SearchInput setSearch={setSearch} />
          <Button
            onClick={showDrawer}
            className="addButton"
            type="primary"
            icon={<PlusOutlined />}
          >
            ADD
          </Button>
        </Space>
      </Row>
      <Row>
        <MenuTabs searchTerm={search} />
      </Row>

      <ProfileDrawer visible={visible} onClose={closeDrawer} />
    </>
  );
};

export default Header;
