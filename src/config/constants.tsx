import {
  UsergroupAddOutlined,
  UserOutlined,
  DropboxOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { ReactComponent as Document } from "../icons/document.svg";

export const sidebarItems = [
  [
    {
      key: "/",
      icon: <DropboxOutlined />,
      label: "Document",
    },
    {
      key: "/employees",
      icon: <UsergroupAddOutlined />,
      label: "Employees",
    },
    {
      key: "/tasks",
      icon: <FileTextOutlined />,
      label: "Tasks",
    },
    {
      key: "/user-info",
      icon: <UserOutlined />,
      label: "User info",
    },
    {
      key: "/user-kpi",
      icon: <FundProjectionScreenOutlined />,
      label: "User KPI",
    },
  ],
  [
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    { key: "/logout", icon: <LogoutOutlined />, label: "Logout" },
  ],
];

export const employeeItem = [
  { title: "All", number: 20, active: true },
  { title: "Lorem ipsum", number: 12, active: false },
  { title: "Lorem ipsum", number: 12, active: false },
  { title: "Lorem ipsum", number: 12, active: false },
];
