import { KpiCardProps } from "./kpi-card.props";
import { Content, Left, Main, Right } from "./kpi-card.styled";

const KpiCard = ({ title, num, type, desc, num2, icon }: KpiCardProps) => {
  return (
    <Content>
      <Main>
        <Left>
          <span>{title}</span>
          <div style={{ color: "#90A3BF" }}>
            <span style={{ color: "#1A202C", fontSize: "24px" }}>{num} </span>
            {type}
          </div>
          <div style={{ fontSize: "12px", color: "#90A3BF" }}>
            <span style={{ color: "#7FB519" }}>{num2} </span>
            {desc}
          </div>
        </Left>
        <Right>
          <img src={icon} alt={title} />
        </Right>
      </Main>
    </Content>
  );
};

export default KpiCard;
