import { styled } from "styled-components";

export const Content = styled.div`
display: flex;
padding: 12px 20px;
align-items: center;
gap: 16px;
border-radius: 16px;
background: var(--white, #fff);
`;
export const User = styled.div`
display: flex;
width: 48px;
height: 48px;
justify-content: center;
align-items: center;
border-radius: 64px;
background: var(--primary-25, #f7f5fd);
`;
export const Number = styled.span`
display: block;
align-self: stretch;
color: var(--gray-900, #101828);
font-size: 24px;
font-weight: 700;
`;
export const Title = styled.span`
max-width: 200px;
color: var(--gray-400, #98a2b3);
font-size: 14px;
font-weight: 400;
`;