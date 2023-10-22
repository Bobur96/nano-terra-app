import { styled } from "styled-components";

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
flex: 1 0 0;
align-self: stretch;
`;
export const Buttons = styled.div`
display: flex;
align-items: flex-start;
align-content: flex-start;
gap: 16px;
flex: 1 0 0;
flex-wrap: wrap;
margin-bottom: 24px;
`;

export const TableContent = styled.div`
display: flex;
padding: 20px;
align-items: center;
gap: 16px;
flex: 1 0 0;
border-radius: 12px;
background: var(--white, #FFF);
`