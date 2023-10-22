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
import { Bottom, Center, Content, Date, Head, Items, LeftContent, Main, Middle, RightBotton, Top, TopImg } from "./user-info.styled";

const UserInfoComponent = () => {
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
          <div style={{ position: "relative" }}>
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
