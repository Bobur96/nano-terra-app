import { styled } from "styled-components";
import HeadBtn from "../headBtn/headBtn";
import sidebarRight from "../../icons/sidebar-right.svg"

const TaskHead = () => {
  const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  `;
  const Tittle = styled.span`
    color: var(--gray-900, #101828);
    font-size: 24px;
    font-weight: 700;
  `;

  return (
    <Content>
      <Tittle>Mijoz Sahifasi</Tittle>
      <HeadBtn title="Vazifalar" icon={sidebarRight} active={true}/>
    </Content>
  );
};

export default TaskHead;
