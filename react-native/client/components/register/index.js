import { useState } from "react";
import BasicInfo from "./BasicInfo";
import FinalInfo from "./FinalInfo";

const tabs = {
  1: BasicInfo,
  2: FinalInfo,
};

const Register = ({ setSignTab }) => {
  const [userInfo, setUserInfo] = useState({});
  const [activeTab, setActiveTab] = useState(1);
  const Tab = tabs[activeTab];

  const getUserInfo = (info) => {
    setUserInfo(info);
    setActiveTab(2);
  };

  return (
    <Tab
      setActiveTab={setActiveTab}
      getUserInfo={getUserInfo}
      userInfo={userInfo}
      setSignTab={setSignTab}
    />
  );
};

export default Register;
