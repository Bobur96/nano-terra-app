import HeadBtn from "../../components/headBtn/headBtn";
import Button from "../../components/menuBtn/menuBtn";
import { employeeItem } from "../../config/constants";
import filter from "../../icons/filter.svg";
import add from "../../icons/add.svg";
import "./employee.css";
import { styled } from "styled-components";
import EmployeeTable from "../../components/employeeTable/employeeTable";

const EmployeePageComponent = () => {

  const Title = styled.div`
    color: var(--dark, #1C1E23);
    font-size: 20px;
    font-weight: 700;
  `

  const Teg = styled.div`
    width: 1px;
    height: 33px;
    opacity: 0.16;
    background: #667085;
  `

  const Span = styled.span`
    color: var(--dark, #1C1E23);
    font-size: 16px;
    font-weight: 500;
  `

  const Input = styled.input`
    display: flex;
    padding: 12px 28px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 32px;
    border: 1px solid var(--gray-300, #D0D5DD);
  `

  return (
    <div className="employees">
      <div className="btn_group">
        {employeeItem.map((el, id) => (
          <Button key={id} title={el.title} number={el.number} active={el.active} />
        ))}
      </div>
      <div className="contents">
        <div className="top_content">
          <div className="top_btns">
            <Title>Active Students</Title>
            <Teg/>
            <Span>274 Users</Span>
            <Input placeholder="Search by Name"/>
          </div>
          <div className="top_btns btns">
            <HeadBtn title="Filter" icon={filter}/>
            <HeadBtn title="Button" active={true} icon={add}/>
          </div>
        </div>
        <div className="table">
          <EmployeeTable/>
        </div>
      </div>
    </div>
  );
};

export default EmployeePageComponent;
