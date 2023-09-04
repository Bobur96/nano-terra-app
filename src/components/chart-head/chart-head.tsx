import { styled } from "styled-components";
import arrowLeft from '../../icons/arrow-left.svg'
import arrowRight from '../../icons/arrow-right.svg'

const ChartHead = () => {

  const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `

  const Title = styled.div`
    color: var(--secondary-500, #1a202c);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.32px;
  `;
  const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: end;
  `

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
