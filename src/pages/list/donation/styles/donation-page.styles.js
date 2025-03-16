import styled, { createGlobalStyle } from "styled-components";
import colors from "../../../../utils/colors";

// 전역 스타일
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #02000e;
    color: ${colors("whiteLight")};
    margin: 0;
    padding: 0;
  }
`;

// 전체 후원 페이지 컨테이너
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-width: 1200px;
  padding: 40px 20px;
  text-align: center;
  margin-top: 60px;
`;

// '후원을 기다리는 조공' 제목
export const Header = styled.h2`
  color: #f7f7f8;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  margin-left: 250px;
`;

// 캐러셀 전체를 감싸는 컨테이너
export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  position: relative;
`;

const itemsPerPage = 4; // 한 번에 보이는 카드 개수
const cardWidth = 282.5 + 40;
const totalCarouselWidth = cardWidth * itemsPerPage;

// 개별 후원 카드들을 배치하는 그리드 (수평 스크롤)
export const CardGrid = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  max-width: ${totalCarouselWidth}px;
  width: ${totalCarouselWidth}px;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
