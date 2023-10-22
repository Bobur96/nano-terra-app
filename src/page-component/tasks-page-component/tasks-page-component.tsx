import { tasksButtonItems, tasksColumns, tasksData } from "../../config/constants";
import { Buttons, Content, TableContent } from "./tasks-page.styled";
import TaskHead from "../../components/taskHead/taskHead";
import Button from "../../components/menuBtn/menuBtn";
import { Table } from "antd";

const TasksPageComponent = () => {
  return (
    <Content>
      <TaskHead />
      <Buttons style={{ margin: 0 }}>
        {tasksButtonItems.map((el, id) => (
          <Button key={id} title={el.title} number={el.number} active={el.active}/>
        ))}
      </Buttons>
      <TableContent>
        <Table style={{ width: "100%" }} columns={tasksColumns} dataSource={tasksData}/>
      </TableContent>
    </Content>
  );
};

export default TasksPageComponent;
