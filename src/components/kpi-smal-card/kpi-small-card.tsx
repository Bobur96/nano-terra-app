import { KpiSmallCardProps } from "./kpi-small-card.props";
import { Content, Number, Title, User } from "./kpi-small-card.styled";
import user from "../../icons/user.svg";

const KpiSmallCard = ({ num, title }: KpiSmallCardProps) => {
  return (
    <Content>
      <User>
        <img src={user} alt="user" />
      </User>
      <div>
        <Number>{num}</Number>
        <Title>{title}</Title>
      </div>
    </Content>
  );
};

export default KpiSmallCard;
