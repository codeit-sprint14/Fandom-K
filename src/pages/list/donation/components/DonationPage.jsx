import { useEffect, useState, useRef } from "react";
import { fetchDonations } from "../../../../apis/donationApi";
import Card from "./Card";
import * as S from "../styles/donation-page.styles";
import BtnArrow from "../../../../components/buttons/BtnArrow";
import { useDonationData } from "../../../../contexts/DonationContext";

const itemsPerPage = 4; // 한 번에 보이는 카드 개수
const cardWidth = 282 + 40;

const DonationPage = () => {
  const [donations, setDonations] = useState([]); // API에서 불러온 후원 데이터
  const [cursor, setCursor] = useState(0); // 페이지네이션을 위한 커서 값
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const carouselRef = useRef(null); //useRef 훅을 사용해 carouselRef라는 참조 생성 -> <S.CardGrid> 요소 참조
  const { donationData } = useDonationData();

  // 화면 크기 감지 및 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // API 호출 -> 후원 목록 가져오기
  useEffect(() => {
    setDonations(donationData);
  }, [donationData]);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(donations?.length / itemsPerPage);

  // 왼쪽 버튼 클릭 시 (이전 4개)
  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        // 현재 스크롤 위치를 기준으로 특정 거리만큼 이동하는 기능의 메서드
        left: -cardWidth * itemsPerPage, // 왼쪽으로 4개 이동
        // behavior: "smooth",
      });
      setCurrentPage((prev) => prev - 1);
    }
  };

  // 오른쪽 버튼 클릭 시 (다음 4개)
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: cardWidth * itemsPerPage, // 오른쪽으로 4개 이동
        // behavior: "smooth",
      });
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <S.PageContainer>
        <S.Header>후원을 기다리는 조공</S.Header>
        <S.CarouselContainer>
          {!isMobile && currentPage > 0 ? (
            <BtnArrow
              className="btn-arrow"
              style={{ zIndex: 5, position: "absolute", left: "-48px" }}
              onClick={prevSlide}
            />
          ) : (
            <div style={{ width: "40px", height: "40px" }}></div>
          )}
          <S.CardGrid
            $cardWidth={cardWidth}
            $itemsPerPage={itemsPerPage}
            ref={carouselRef}
          >
            {loading ? (
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <Card key={index} isLoading={true} />
              ))
            ) : donations?.length > 0 ? (
              donations?.map((donation) => (
                <Card key={donation.id} donation={donation} />
              ))
            ) : (
              <p>등록된 후원이 없습니다.</p>
            )}
          </S.CardGrid>
          {!isMobile && currentPage < totalPages - 1 && (
            <BtnArrow
              isRight
              className="btn-arrow"
              style={{ zIndex: 5, position: "absolute", right: "-48px" }}
              onClick={nextSlide}
            />
          )}
        </S.CarouselContainer>
      </S.PageContainer>
    </>
  );
};

export default DonationPage;
