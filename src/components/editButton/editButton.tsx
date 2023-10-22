import edit from "../../icons/editt.svg";
import deleted from "../../icons/delete.svg"
import { DButton, Div, EButton } from "./editButton.styles";

const EditButton = () => {

  return (
    <Div>
      <EButton><img src={edit} alt="edit" /> Edit</EButton>
      <DButton><img src={deleted} alt="delete" /></DButton>
    </Div>
  )
}

export default EditButton