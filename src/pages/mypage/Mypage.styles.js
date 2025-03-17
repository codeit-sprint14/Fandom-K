import styled from "styled-components";
import typography from "../../utils/typography";

export const Container = styled.div`
  padding-top: 80px;
  background-color: #02000e;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  align-items: center; /* 내부 요소 왼쪽 정렬 */
`;

export const Section = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  justify-content: flex-start;
  padding: 0 20px;
`;

export const Title = styled.h2`
  ${typography("sb18")};
  color: white;
  text-align: left;
  margin-bottom: 28px;
  padding-left: 20px;
`;

export const Divider = styled.div`
  max-width: 1237px; /* 아이돌 리스트와 동일한 너비 */
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 40px auto; /* 중앙 정렬 */
  // display: block;

  @media (max-width: 768px) {
    margin: 24px auto;
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
  gap: 24px; /* 프로필 간격 */
  padding: 0 20px; /* 창 줄여도 좌우 여백 유지 */

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 295px;
  margin: 0 auto;
  padding: 20px 0;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
