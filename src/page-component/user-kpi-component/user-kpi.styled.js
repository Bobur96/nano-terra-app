import { styled } from "styled-components";

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
flex: 1 0 0;
align-self: stretch;
`;
export const Cards = styled.div`
display: flex;
align-items: flex-start;
align-content: flex-start;
gap: 24px;
align-self: stretch;
flex-wrap: wrap;
`;
export const Main = styled.div`
display: flex;
align-items: flex-start;
gap: 24px;
align-self: stretch;
`;
export const Charts = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 24px;
align-self: stretch;
`;
export const Middle = styled.div`
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
export const Tables = styled.div`
display: flex;
width: 1112px;
padding: 16px 20px;
flex-direction: column;
align-items: center;
gap: 16px;
border-radius: 8px;
background: var(--white, #FFF);
box-shadow: 0px 4px 24px 0px rgba(40, 53, 58, 0.02);
`;

export const MainLeft = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
border-radius: 12px;
background: var(--white, #FFF);
`
export const Line = styled.div`
width: 2px;
align-self: stretch;
border-radius: 12px;
background: var(--gray-100, #F2F4F7);
`
export const PieContent = styled.div`
display: flex;
width: 340px;
padding: 20px 24px 32px 24px;
flex-direction: column;
align-items: center;
gap: 24px;
border-radius: 10px;
background: #FFF;
`