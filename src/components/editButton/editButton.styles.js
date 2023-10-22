import { styled } from "styled-components";

export const EButton = styled.button`
display: flex;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 6px;
background: var(--primary-500, #4623E9);  
outline: none;
border: none;

color: var(--white, #FFF);
text-align: center;
font-size: 12px;
font-weight: 500;
&:hover {
  transform: scale(1.02)
}
`
export const DButton = styled.button`
display: flex;
width: 28px;
height: 28px;
padding: 12px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 6px;
margin-left: 7px;
outline: none;
border: none;
background: transparent;
&:hover {
  transform: scale(1.04)
},
&:focus {
  box-shadow: 0px 0px 2px #4623E9;
}
`
export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`