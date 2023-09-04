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

    font-size: '16px';
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
        <div style={{color: '#90A3BF'}}><span style={{color: '#1A202C', fontSize: '24px'}}>{num} </span>{type}</div>
        <div style={{fontSize: '12px', color: '#90A3BF'}}><span style={{color: "#7FB519"}}>{num2} </span>{desc}</div>
      </Left>
      <Right>
        <img src={icon} alt={title} />
      </Right>
    </Main>
  </Content>
};

export default KpiCard;
