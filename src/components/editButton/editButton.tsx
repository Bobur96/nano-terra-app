import { styled } from "styled-components";
import edit from "../../icons/editt.svg";
import deleted from "../../icons/delete.svg"

const EditButton = () => {

  const EButton = styled.span`
    display: flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    background: var(--primary-500, #4623E9);  

    color: var(--white, #FFF);
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  `
  const DButton = styled.span`
    display: flex;
    width: 28px;
    height: 28px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;
    margin-left: 7px;
  `
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <Div>
      <EButton><img src={edit} alt="edit" /> Edit</EButton>
      <DButton><img src={deleted} alt="delete" /></DButton>
    </Div>
  )
}

export default EditButton