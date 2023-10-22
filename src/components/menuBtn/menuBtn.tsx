import { MenuBtnProps } from "./menuBtn.props";
import styled from "styled-components";

const MenuBtn = ({ title, number, active }: MenuBtnProps) => {
  const Title = styled.div`
    color: ${active ? "var(--primary-500, #4623E9)" : "#1C1E23"};
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: normal;
  `;
  const Span = styled.span`
    color: ${active ? "#fff" : "#000"};
    font-size: 12px;
    line-height: 120%;
    background: ${active
      ? "var(--primary-500, #4623E9)"
      : "var(--gray-100, #F2F4F7);"};
    display: flex;
    padding: 2px 6px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  `;
  const Button = styled.button`
    display: flex;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    border: 1px solid ${active ? "var(--primary-500, #4623E9)" : "var(--gray-200, #EAECF0)"};
    color: ${active ? "var(--primary-500, #4623E9)" : "var(--gray-200, #EAECF0)"};
    background: var(--white, #fff);
    text-align: center;
    font-style: normal;
    font-weight: 500;
    &:hover {
      background: var(--white, #f9fbfb);
    }
    &:focus {
      border: 1px solid var(--primary-500, #4623e9);
      color: var(--primary-500, #4623e9);
      ${Title} {
        color: var(--primary-500, #4623e9);
      }
      ${Span} {
        background: var(--primary-500, #4623e9);
        color: #fff;
      }
    }
  `;

  return (
    <Button>
      <Title>{title}</Title>
      <Span>{number}</Span>
    </Button>
  );
};

export default MenuBtn;
