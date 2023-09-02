import { UsergroupAddOutlined, UserOutlined, DropboxOutlined, FileTextOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
import {ReactComponent as Document} from "../icons/document.svg"

export const sidebarItems = [
  {
    key: '/',
    icon: <DropboxOutlined />,
    label: 'Document',
  },
  {
    key: '/employees',
    icon: <UsergroupAddOutlined />,
    label: 'Employees',
  },
  {
    key: '/tasks',
    icon: <FileTextOutlined />,
    label: 'Tasks',
  },
  {
    key: '/user-info',
    icon: <UserOutlined />,
    label: 'User info',
  },
  {
    key: '/user-kpi',
    icon: <FundProjectionScreenOutlined />,
    label: 'User KPI',
  },
]