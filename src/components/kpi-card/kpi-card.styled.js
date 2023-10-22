import { styled } from "styled-components";

export const Content = styled.div`
display: flex;
width: 340px;
padding: 24px;
align-items: flex-start;
gap: 20px;
border-radius: 10px;
background: #FFF;
`
export const Main = styled.div`
display: flex;
align-items: flex-start;
gap: 20px;
flex: 1 0 0;
`
export const Left = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
flex: 1 0 0;

font-size: '16px';
align-self: stretch;
color: var(--secondary-500, #1A202C);
text-align: justify;
font-weight: 600;
`
export const Right = styled.div`
display: flex;
width: 42px;
height: 42px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: #F6F7F9;
`