import styled, { keyframes } from "styled-components";
import typography from "../../utils/typography";

// 페이드인 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
width: 100vw;
  height: 100vh;
  background-color: #02000e;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center; /* 내부 요소 정렬 */
  overscroll-behavior: none;

  animation: ${fadeIn} 0.6s ease-out;
`;

export const InterestSection = styled.div`
  margin: 100px auto 40px auto;
  max-width: 1200px;
  z-index: 3;
  /* background: #02000E; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-top: 74px; /* 모바일에서는 여백 줄이기 */
    margin-bottom: 24px;
  }
`;

export const AddInterestSection = styled.div`
  margin: 16px auto;
  /* margin-top: 100px; */
  max-width: 1250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
  box-sizing: border-box;
  /* position: relative; */

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
  
    &::after{
    content: "";
    width: 100vw;
    height: 240px;
    background: linear-gradient(0deg, rgba(2,0,14,1) 20%, rgba(2,0,14,0) 100%);
    z-index: 3;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const Title = styled.h2`
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: white;
  text-align: left;
  margin-bottom: 28px;
  padding-left: 20px;
  position: sticky;
  z-index: 3;
  position: relative;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }

  &.lists::before{
    content: "";
    width: 100vw;
    height: 48px;
    background: linear-gradient(180deg, rgba(2,0,14,1) 0%, rgba(2,0,14,0) 100%);
    z-index: 2;
    position: fixed;
    left: 0;
    margin-top: 54px;
  }
`;

export const Divider = styled.hr`
  width: 100vw;
  height: 1px;
  opacity: 0.2;
  margin: 0 auto 48px; /* 중앙 정렬 */
  // display: block;

  @media (max-width: 768px) {
    margin: 12px auto;
  }
`;

export const ProfileListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1237px;
  width: 100%;
  margin-left: 0;
  gap: 12px; /* 프로필 간격 */
  padding: 0 20px; /* 창 줄여도 좌우 여백 유지 */

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 108px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 0 auto;
  padding: 10px 0;
  margin-top: 10px;

  @media (max-width: 768px) {
    bottom: 32px;
    width: 100%;
    padding: 10px 48px;
    box-sizing: border-box;
  }

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
