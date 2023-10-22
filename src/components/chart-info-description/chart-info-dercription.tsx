import { ChartDescriptionProps } from "./chart-description.props";
import { Content, Icon, Title } from "./chart-info-description.styles"

const ChartInfoDercription = ({ color, title, num }: ChartDescriptionProps) => {

  return <Content>
    <Icon color={color}/>
    <Title>{title}</Title>
    <span>{num}</span>
  </Content>
};

export default ChartInfoDercription;
