import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
 
export const sidebarItems = [
  {
    key: '/',
    icon: <UserOutlined />,
    label: 'Document',
  },
  {
    key: '/employees',
    icon: <VideoCameraOutlined />,
    label: 'Employees',
  },
  {
    key: '/tasks',
    icon: <UploadOutlined />,
    label: 'Tasks',
  },
  {
    key: '/user-info',
    icon: <UploadOutlined />,
    label: 'User info',
  },
  {
    key: '/user-kpi',
    icon: <UploadOutlined />,
    label: 'User KPI',
  },
]