import styled from "styled-components";
import { HeadBtnProps } from "./headBtn.props";
import { Icon } from "./headBtn.styled";

const HeadBtn = ({ title, icon, active }: HeadBtnProps) => {
  const Button = styled.button`
    display: flex;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    border: 1px solid var(--primary-500, #4623e9);
    background: ${active ? "var(--primary-500, #4623E9)" : "#fff"};
    font-size: 16px;
    font-weight: 500;
  `;

  const Title = styled.div`
    color: ${active ? "#fff" : "var(--primary-500, #4623E9)"};
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: normal;
  `;

  return (
    <Button>
      {icon && (
        <Icon>
          <img src={icon} alt={title} />
        </Icon>
      )}
      <Title>{title}</Title>
    </Button>
  );
};

export default HeadBtn;
