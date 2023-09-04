import { styled } from "styled-components";
import KpiCard from "../../components/kpi-card/kpi-card";
import arrowUp from "../../icons/arrow-up.svg"

const UserInfoComponent = () => {
  const Main = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 24px;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
  `;
  const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  `;
  const Top = styled.div`
    display: flex;
    padding: 20px;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--white, #fff);
  `;
  const Middle = styled.div`
    display: flex;
    padding: 24px 46px 26px 37px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 6px 24px 0px rgba(208, 213, 221, 0.2);
  `;
  const Bottom = styled.div`
    display: flex;
    padding: 24px 46px 26px 37px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 6px 24px 0px rgba(208, 213, 221, 0.2);
  `;
  const LeftTop = styled.div`
    display: flex;
    padding: 24px;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    border-radius: 10px;
    background: #fff;
  `;
  const LeftBotton = styled.div`
    display: flex;
    width: 340px;
    padding: 20px 24px 32px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 10px;
    background: #fff;
  `;

  return (
    <Main>
      <Content>
        <Top></Top>
        <Middle></Middle>
        <Bottom></Bottom>
      </Content>
      <LeftContent>
        <KpiCard title="KPI кўрсаткичи" num="73" type="балл" num2="20%" desc="ўтган ойга нисбатан" icon={arrowUp}/>
        <LeftBotton></LeftBotton>
      </LeftContent>
    </Main>
  );
};

export default UserInfoComponent;
