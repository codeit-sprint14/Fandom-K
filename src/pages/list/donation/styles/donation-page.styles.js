import styled from "styled-components";

// 전체 후원 페이지 컨테이너
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 90px 280px;
  text-align: center;
  margin-top: 70px;

  @media (max-width: 1023px) {
    padding: 64px 16px;
    margin-top: 64px;
  }

  @media (max-width: 767px) {
    padding: 40px 16px;
    margin-top: 64px;
  }
`;

const itemsPerPage = 4; // 한 번에 보이는 카드 개수
const cardWidth = 282.5 + 40;
const totalCarouselWidth = cardWidth * itemsPerPage;

// '후원을 기다리는 조공' 제목
export const Header = styled.h2`
  color: #f7f7f8;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
  text-align: left; /* 왼쪽 정렬 */
  margin-left: 8px;

  @media (min-width: 1200px) {
    margin-left: calc((100% - ${totalCarouselWidth}px) / 2);
  }

  @media (max-width: 1023px) {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

// 캐러셀 전체를 감싸는 컨테이너
export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    gap: 40px; // PC에서는 버튼과 카드리스트 간격 40px
  }

  @media (max-width: 1023px) {
    gap: 0; // 태블릿 & 모바일에서는 버튼이 사라지므로 간격 0px
  }
`;

// 개별 후원 카드들을 배치하는 그리드 (수평 스크롤)
export const CardGrid = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  max-width: ${totalCarouselWidth}px;
  width: ${totalCarouselWidth}px;
  padding: 0 12px;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 8px;
  }

  @media (max-width: 767px) {
    padding: 0 4px;
  }
  &::-webkit-scrollbar {
    display: none; // 모든 환경에서 스크롤바 숨김
  }
`;

// 버튼 숨기기
export const BtnArrow = styled.button`
  scroll-snap-align: start; // 개별 카드가 스냅 되도록 설정
  display: block; // 기본적으로 PC에서는 보이게 설정

  @media (max-width: 1023px) {
    display: none !important; // 태블릿 & 모바일에서 강제로 숨김
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;
