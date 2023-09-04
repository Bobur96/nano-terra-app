import { styled } from "styled-components";
import { UserItemProps } from "./user-item.props";

const UserInfoItem = ({ title, value, grey }: UserItemProps) => {

  const Content = styled.div`
    display: flex;
    padding: 8px 12px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 8px;
    background: ${grey ? "var(--gray-50, #F9FAFB)" : ""};
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-500, #667085);
  `
  const Title = styled.span`
    flex: 1 0 0;
    color: var(--gray-900, #101828);
  `

  return <Content>
    <Title>{title}</Title>
    <span style={{flex: '1 0 0'}}>{value}</span>
  </Content>
};

export default UserInfoItem;
