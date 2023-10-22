import {
  UsergroupAddOutlined,
  UserOutlined,
  DropboxOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import EditButton from "../components/editButton/editButton";
import { ColumnsType } from "antd/es/table";


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

// EMPLOYEEE

export const employeeItem = [
  { title: "All", number: 20, active: true },
  { title: "Lorem ipsum", number: 12, active: false },
  { title: "Lorem ipsum", number: 12, active: false },
  { title: "Lorem ipsum", number: 12, active: false },
];

export interface EmployeeDataType {
  key: React.Key;
  legends: string;
  user: string;
  type: string;
  description: string;
  action: any;
}

export const employeColumns: ColumnsType<EmployeeDataType> = [
  { title: 'Legends', dataIndex: 'legends' },
  { title: 'User Legends', dataIndex: 'user' },
  { title: 'Type', dataIndex: 'type' },
  { title: 'Description', dataIndex: 'description' },
  { title: '', dataIndex: 'action' },
];

export const employeData: EmployeeDataType[] = [
  {
    key: '1',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: <EditButton/>,
  },
  {
    key: '2',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: <EditButton/>,
  },
  {
    key: '3',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: <EditButton/>,
  },
  {
    key: '4',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: <EditButton/>,
  },
];

// EMPLOYEEE

// TASK

export const tasksButtonItems = [
  { title: "1-vazifa", number: 20, active: true },
  { title: "2-vazifa", number: 12, active: false },
  { title: "3-vazifa", number: 12, active: false },
  { title: "4-vazifa", number: 12, active: false },
];

export interface TasksDataType {
  key: React.Key;
  ifo: string;
  xiz: string;
  bir: string;
  ikki: string;
  uch: string;
  tort: string;
  besh: string;
}

export const tasksColumns: ColumnsType<TasksDataType> = [
  { title: 'IFO', dataIndex: 'ifo' },
  { title: `Хизматга чиққан кун / Патруллик йўналишида хизмат олиб борилган кун`, dataIndex: 'xiz' },
  { title: '1.1', dataIndex: 'bir' },
  { title: '1.2', dataIndex: 'ikki' },
  { title: '1.3', dataIndex: 'uch' },
  { title: '1.4', dataIndex: 'tort' },
  { title: '1.5', dataIndex: 'besh' },
];

export const tasksData: TasksDataType[] = [
  {
    key: '1',
    ifo: '1-гр. ком. Ж.Ахранов',
    xiz: '31 / 28',
    bir: '20,0 / 28',
    ikki: '20,0 / 28',
    uch: '20,0 / 28',
    tort: '20,0 / 28',
    besh: '20,0 / 28'
  },
  {
    key: '2',
    ifo: '1-гр. ком. Ж.Ахранов',
    xiz: '31 / 28',
    bir: '20,0 / 28',
    ikki: '20,0 / 28',
    uch: '20,0 / 28',
    tort: '20,0 / 28',
    besh: '20,0 / 28'
  },
  {
    key: '3',
    ifo: '1-гр. ком. Ж.Ахранов',
    xiz: '31 / 28',
    bir: '20,0 / 28',
    ikki: '20,0 / 28',
    uch: '20,0 / 28',
    tort: '20,0 / 28',
    besh: '20,0 / 28'
  },
  {
    key: '4',
    ifo: '1-гр. ком. Ж.Ахранов',
    xiz: '31 / 28',
    bir: '20,0 / 28',
    ikki: '20,0 / 28',
    uch: '20,0 / 28',
    tort: '20,0 / 28',
    besh: '20,0 / 28'
  },

];

// TASK

// USER INFO

export const userInfoItem = [
  { id: 1, title: "Ҳудуд:", value: "Андижон" },
  { id: 2, title: "Туман (шаҳар):", value: "Андижон ш." },
  { id: 3, title: "Маҳалла:", value: "Андижон МФЙ" },
  { id: 4, title: "Лавозими:", value: "Инспектор" },
  { id: 5, title: "Унвони:", value: "Капитан" },
  { id: 6, title: "Туғилган санаси:", value: "12.01.1980" },
  { id: 7, title: "Телефон рақами:", value: "+99890 123-45-67" },
  { id: 8, title: "Паспорт серия ва рақами:", value: "АА 1234567" },
  { id: 9, title: "Гувоҳнома рақами:", value: "123456789" },
]

export const infoChartDescription = [
  { color: '#EB7CA6', title: '1-вазифа:', num: '78' },
  { color: '#CC6FF8', title: '2-вазифа:', num: '15' },
  { color: '#7C5CFC', title: '3-вазифа:', num: '131' },
  { color: '#5CAFFC', title: '4-вазифа:', num: '174' },
]

// USER INFO

// USER KPI

export const kpiCards = [
  { num: 8, desc: 'Ходимлар сони штат бўйича' },
  { num: 0, desc: 'Вакант' },
  { num: 8, desc: 'Рўйхат бўйича' },
  { num: 1, desc: 'Меҳнат таътилида' },
  { num: 0, desc: 'Сабабли' },
  { num: 0, desc: 'Сабабсиз' },
]

// USER KPI
