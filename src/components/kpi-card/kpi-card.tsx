import { styled } from "styled-components";
import { KpiCardProps } from "./kpi-card.props";

const KpiCard = ({ title, num, type, desc, num2, icon }: KpiCardProps) => {

  const Content = styled.div`
    display: flex;
    width: 340px;
    padding: 24px;
    align-items: flex-start;
    gap: 20px;
    border-radius: 10px;
    background: #FFF;
  `
  const Main = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
  `
  const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;

    align-self: stretch;
    color: var(--secondary-500, #1A202C);
    text-align: justify;
    font-weight: 600;
  `
  const Right = styled.div`
    display: flex;
    width: 42px;
    height: 42px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #F6F7F9;
  `

  return <Content>
    <Main>
      <Left>
        <span>{title}</span>
        <span>{num} %</span>
        <span>{desc}</span>
      </Left>
      <Right>
        <img src={icon} alt={title} />
      </Right>
    </Main>
  </Content>
};

export default KpiCard;
