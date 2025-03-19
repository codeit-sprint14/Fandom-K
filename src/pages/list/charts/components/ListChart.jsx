import React, { useState, useEffect } from "react";
import { getIdolList } from "./ListChartUtils";
import * as S from "../styles/index";
import BtnIco from "../../../../components/buttons/BtnIco";
import BtnBasic from "../../../../components/buttons/BtnBasic";
import ProfileIco from "../../../../components/profiles/ProfileIco/index";
import Toast from "../../../../components/modals/Toast";
import { MODAL_TYPES, useModal } from "../../../../contexts/ModalContext";
import { useIdolData } from "../../../../contexts/IdolContext";
import crownIcon from "../../../../assets/icons/crown.svg"

function ListChart() {
  const [isFemale, setIsFemale] = useState(true);
  const [idols, setIdols] = useState(null);
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(10); // 기본 10위
  const [showToast, setShowToast] = useState(0);
  const { openModal } = useModal();
  const { idolData } = useIdolData();

  // 성별 변경 시 아이돌 목록 새로 불러오기
  const loadIdols = () => {
    console.log("실행함");
    const gender = isFemale ? "female" : "male";
    const filteredIdolData = idolData?.filter((e) => e.gender === gender);
    setIdols(filteredIdolData);
    console.log("끝");
  };

  useEffect(() => {
    loadIdols();
    setDisplayCount(10);
  }, [isFemale, idolData]);

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(10);
    };

    handleResize(); // 처음 렌더링 시에 화면 크기에 맞게 설정
    window.addEventListener("resize", handleResize); // 화면 크기 변경 시에 실행

    return () => {
      window.removeEventListener("resize", handleResize); // 리소스 해제
    };
  }, []);

  // 아이돌 데이터를 불러오는 역할

  // 더보기 버튼 클릭 시 5개 또는 10개씩 증가
  const loadMoreIdols = () => {
    // 화면 크기가 1023px 이하이면 5개씩, 그 이상이면 10개씩 추가
    const increment = window.innerWidth <= 1023 ? 5 : 10;
    setDisplayCount((prev) => prev + increment); // `increment`를 사용하여 추가
  };

  const handleToast = (msg) => {
    if (!showToast) {
      setShowToast(msg);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <>
      {showToast ? <Toast msg={showToast} /> : ""}
      <S.StyledSection>
        <S.Title>
          <S.TitleText>이달의 차트</S.TitleText>
          <S.TitleBtn>
            <BtnIco
              text="차트 투표하기"
              icon="ic-chart.svg"
              onClick={() => openModal(MODAL_TYPES.VOTE)}
            />
          </S.TitleBtn>
        </S.Title>

        <S.ButtonGroup>
          <S.TabButton active={isFemale} onClick={() => setIsFemale(true)}>
            이달의 여자 아이돌
          </S.TabButton>
          <S.TabButton active={!isFemale} onClick={() => setIsFemale(false)}>
            이달의 남자 아이돌
          </S.TabButton>
        </S.ButtonGroup>

        <S.RankingGrid>
          {loading
            ? // 로딩 상태일 때 각 아이템에 대해 로딩 스켈레톤 표시
              Array(10)
                .fill("")
                .map(() => (
                  <S.RankingItem>
                    <S.ProfileIcoContainer>
                      <S.LoadingSkeleton className="skeleton--img" />
                    </S.ProfileIcoContainer>
                    <S.RankingNumber>
                      <S.LoadingSkeleton className="skeleton--number" />
                    </S.RankingNumber>
                    <S.IdolText>
                      <S.IdolGroup>
                        <S.LoadingSkeleton />
                      </S.IdolGroup>
                      <S.IdolName>
                        <S.LoadingSkeleton />
                      </S.IdolName>
                    </S.IdolText>
                    <S.VoteCount>
                      <S.LoadingSkeleton />
                    </S.VoteCount>
                  </S.RankingItem>
                ))
            : idols?.slice(0, displayCount).map((idol, index) => (
                <S.RankingItem key={idol.id}>
                  <S.ProfileIcoContainer>
                    <ProfileIco img={idol.profilePicture} />
                    {index === 0 && ( // 1위일 때만 표시
                      <S.CrownIcon> <img src={crownIcon} alt="" /> </S.CrownIcon>
                    )}
                  </S.ProfileIcoContainer>
                  <S.RankingNumber>{index + 1}</S.RankingNumber>
                  <S.IdolText>
                    <S.IdolGroup>{idol.group}</S.IdolGroup>
                    <S.IdolName>{idol.name}</S.IdolName>
                  </S.IdolText>
                  <S.VoteCount>
                    {idol.totalVotes.toLocaleString("ko-KR")}표
                  </S.VoteCount>
                </S.RankingItem>
              ))}
        </S.RankingGrid>

        {displayCount < idols?.length && !loading && (
          <S.BasicParent>
            <div style={{ width: "327px" }}>
              <BtnBasic onClick={loadMoreIdols}>더 보기</BtnBasic>
            </div>
          </S.BasicParent>
        )}
      </S.StyledSection>
    </>
  );
}

export default ListChart;
