import { styled } from "styled-components";

export const Content = styled.div`
display: flex;
align-items: center;
gap: 16px;
align-self: stretch;
text-align: justify;
color: var(--secondary-500, #1A202C);
font-size: 16px;
font-weight: 700;
`
export const Icon = styled.span`
display: flex;
width: 12px;
height: 12px;
padding: 2px;
justify-content: center;
align-items: center;
border-radius: 70px;
background: ${props => props.color};
`
export const Title = styled.span`
flex: 1 0 0;
color: var(--secondary-400, #596780);
font-size: 12px;
font-weight: 600;
`