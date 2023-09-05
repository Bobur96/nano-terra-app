import { styled } from "styled-components";
import KpiCard from "../../components/kpi-card/kpi-card";
import arrowUp from "../../icons/arrow-up.svg";
import calendar from "../../icons/calendar-2.svg";
import avatar from "../../icons/avatar.svg";
import { infoChartDescription, userInfoItem } from "../../config/constants";
import UserInfoItem from "../../components/user-info-item/user-info-item";
import ChartHead from "../../components/chart-head/chart-head";
import InfoChart from "../../components/charts/info-chart";
import PieChart from "../../components/charts/pie-chart";
import chartInfo from "../../icons/chart-info.svg";
import ChartInfoDercription from "../../components/chart-info-description/chart-info-dercription";

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
  const TopImg = styled.div`
    display: flex;
    width: 160px;
    height: 160px;
    padding: 75px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--gray-50, #f9fafb);
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

  const RightBotton = styled.div`
    display: flex;
    width: 340px;
    padding: 20px 24px 32px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 10px;
    background: #fff;
  `;
  const Head = styled.div`
    display: flex;
    width: 292px;
    justify-content: space-between;
    align-items: flex-start;

    color: var(--secondary-500, #1a202c);
    text-align: justify;
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.32px;
  `;
  const Date = styled.div`
    display: flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: var(--gray-50, #f9fafb);
  `;
  const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;
    align-self: stretch;
  `;
  const Center = styled.div`
    display: grid;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  `;

  return (
    <Main>
      <Content>
        <Top>
          <TopImg>
            <img src={avatar} alt="avatar" />
          </TopImg>
          <div style={{ width: "90%" }}>
            {userInfoItem.map((el) => (
              <UserInfoItem
                key={el.id}
                title={el.title}
                value={el.value}
                grey={el.id % 2 == 1}
              />
            ))}
          </div>
        </Top>
        <Middle>
          <ChartHead />
          <InfoChart />
        </Middle>
        <Bottom>
          <ChartHead />
          <InfoChart />
        </Bottom>
      </Content>
      <LeftContent>
        <KpiCard
          title="KPI кўрсаткичи"
          num="73"
          type="балл"
          num2="20%"
          desc="ўтган ойга нисбатан"
          icon={arrowUp}
        />
        <RightBotton>
          <Head>
            <span>KPI кўрсаткичи</span>
            <Date>
              <span style={{ opacity: "0.32" }}>__/__/____</span>{" "}
              <img src={calendar} alt="calendar" />
            </Date>
          </Head>
          <div style={{position: 'relative'}}>
            <img src={chartInfo} alt="chart info" />
            <Center>
              <span
                style={{
                  fontSize: "16px",
                  color: "var(--secondary-400, #596780)",
                }}
              >
                Жами
              </span>
              <span
                style={{
                  fontSize: "24px",
                  color: "var(--secondary-500, #1A202C)",
                  fontWeight: "700",
                }}
              >
                74,6
              </span>
            </Center>
          </div>
          <Items>
            {infoChartDescription.map((el) => (
              <ChartInfoDercription
                key={el.color}
                color={el.color}
                title={el.title}
                num={el.num}
              />
            ))}
          </Items>
        </RightBotton>
      </LeftContent>
    </Main>
  );
};

export default UserInfoComponent;
