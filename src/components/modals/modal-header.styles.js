import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-contetn: center;
  padding: 12px;
  width: 100%;
  background: transparent;
  border-radius: 12px 12px 0 0;
  position: relative;
`;

export const HandleBar = styled.div`
  position: absolute;
  top: 12px;
  left: 131.5px;
  display: inline-flex;
  align-items: center;
  gap: 156px;
  background: #aaaaaa;
  border-radius: 2px;
  height: 6px;
  weight: 72px;
  background: gray;

  /* 데스크톱 환경에서는 숨기기 */
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: white;
  font: sb18;
  margin: 0 auto;
`;
