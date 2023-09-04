import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  legends: string;
  user: string;
  type: string;
  description: string;
  action: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Legends',
    dataIndex: 'legends',
  },
  {
    title: 'User Legends',
    dataIndex: 'user',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: '',
    dataIndex: 'action',
  },
];

const data: DataType[] = [
  {
    key: '1',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: 'aaa',
  },
  {
    key: '2',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: 'aaa',
  },
  {
    key: '3',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: 'aaa',
  },
  {
    key: '4',
    legends: 'legend',
    user: 'User Legend',
    type: 'type',
    description: 'description',
    action: 'aaa',
  },
];

const rowSelection = { getCheckboxProps: (record: DataType) => ({}) }


const EmployeeTable = () => {
  return <Table rowSelection={{...rowSelection}} columns={columns} dataSource={data} />
};

export default EmployeeTable;

