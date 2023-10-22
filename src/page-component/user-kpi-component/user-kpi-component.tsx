import { kpiCards } from "../../config/constants";
import KpiSmallCard from "../../components/kpi-smal-card/kpi-small-card";
import KpiCard from "../../components/kpi-card/kpi-card";
import arrowUp from "../../icons/arrow-up.svg";
import ChartHead from "../../components/chart-head/chart-head";
import InfoChart from "../../components/charts/info-chart";
import { Cards, Charts, Content, Line, Main, MainLeft, Middle, Tables } from "./user-kpi.styled";

const UserKpiComponent = () => {

  return (
    <Content style={{paddingTop: 0}}>
      <Cards>
        { kpiCards.map(el => (<KpiSmallCard num={el.num} title={el.desc}/>)) }
      </Cards>
      <Main>
        <MainLeft>
          <div></div>
          <Line/>
          <div></div>
        </MainLeft>
        <KpiCard title="KPI кўрсаткичи" num="73" num2="20%" desc="ўтган ойга нисбатан" type="%" icon={arrowUp}/>
      </Main>
      <Charts>
        <Middle>
          <ChartHead />
          <InfoChart />
        </Middle>
      </Charts>
      <Tables></Tables>
    </Content>
  );
};

export default UserKpiComponent;
