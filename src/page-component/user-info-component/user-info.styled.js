import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 24px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
export const Top = styled.div`
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--white, #fff);
`;
export const TopImg = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  padding: 75px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--gray-50, #f9fafb);
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
export const Bottom = styled.div`
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

export const RightBotton = styled.div`
  display: flex;
  width: 340px;
  padding: 20px 24px 32px 24px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: #fff;
`;
export const Head = styled.div`
  display: flex;
  width: 292px;
  justify-content: space-between;
  align-items: flex-start;

  color: var(--secondary-500, #1a202c);
  text-align: justify;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.32px;
`;
export const Date = styled.div`
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--gray-50, #f9fafb);
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  align-self: stretch;
`;
export const Center = styled.div`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
