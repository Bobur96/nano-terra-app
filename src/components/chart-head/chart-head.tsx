import arrowLeft from '../../icons/arrow-left.svg'
import arrowRight from '../../icons/arrow-right.svg'
import { Buttons, Content, Title } from "./chart-head.styled";

const ChartHead = () => {

  return (
    <Content>
      <Title>Иш натижалари самарадорлиги (ойлар кесимида)</Title>
      <Buttons>
        <img src={arrowLeft} alt="left" />
        <span>2023</span>
        <img src={arrowRight} alt="right" />
      </Buttons>
    </Content>
  );
};

export default ChartHead;
