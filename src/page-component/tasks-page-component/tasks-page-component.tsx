import { tasksButtonItems, tasksColumns, tasksData } from "../../config/constants";
import TaskHead from "../../components/taskHead/taskHead";
import Button from "../../components/menuBtn/menuBtn";
import { styled } from "styled-components";
import { Table } from "antd";

const TasksPageComponent = () => {

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1 0 0;
    align-self: stretch;
  `;
  const Buttons = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 16px;
    flex: 1 0 0;
    flex-wrap: wrap;
    margin-bottom: 24px;
  `;

  const TableContent = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
    border-radius: 12px;
    background: var(--white, #FFF);
  `

  return (
    <Content>
      <TaskHead />
      
      <Buttons style={{margin: 0}}>
        {tasksButtonItems.map((el, id) => (
          <Button key={id} title={el.title} number={el.number} active={el.active}/>
        ))}
      </Buttons>

      <TableContent>
        <Table style={{width: "100%"}} columns={tasksColumns} dataSource={tasksData} />
      </TableContent>
    </Content>
  );
};

export default TasksPageComponent;
