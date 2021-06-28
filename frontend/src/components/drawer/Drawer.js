import { Drawer } from "antd";
import React from "react";
import ProfileForm from "../profile/ProfileForm";

const ProfileDrawer = ({ visible, onClose, currentId }) => {
  return (
    <>
      <Drawer
        title="Profile"
        placement="right"
        width={750}
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <ProfileForm currentId={currentId} />
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
