import React, { useState, useEffect } from "react";
import { getIdolList } from "./ListChartUtils";
import * as S from "../styles/index";
import crownIcon from "../../../../assets/icons/crown.svg";
import BtnIco from "../../../../components/buttons/BtnIco";
import BtnBasic from "../../../../components/buttons/BtnBasic";
import ProfileIco from "../../../../components/profiles/ProfileIco/index";
import ModalVote from "../../../../components/modals/ModalVote/index";

function ListChart() {
    const [isFemale, setIsFemale] = useState(true);
    const [idols, setIdols] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [displayCount, setDisplayCount] = useState(10); // 기본 10위

    // 성별 변경 시 아이돌 목록 새로 불러오기
    useEffect(() => { loadIdols(); }, [isFemale]);

    // 여자/남자 아이돌 버튼 클릭시 1023px 이하일 때 5, 이상일 때 10
    useEffect(() => {
        setDisplayCount(window.innerWidth <= 1023 ? 5 : 10);
    }, [isFemale]);

    // 화면 크기가 1023px 이하일 때 5위까지 표시
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1023) {
                setDisplayCount(5);
            } else {
                setDisplayCount(10); // 그 외에는 10위까지 표시
            }
        };

        handleResize(); // 처음 렌더링 시에 화면 크기에 맞게 설정
        window.addEventListener("resize", handleResize); // 화면 크기 변경 시에 실행

        return () => {
            window.removeEventListener("resize", handleResize); // 리소스 해제
        };
    }, []);

    // 아이돌 데이터를 불러오는 역할
    const loadIdols = async () => {
        setLoading(true);
        const gender = isFemale ? "female" : "male";
        const idolData = await getIdolList(gender);
        setIdols(idolData);
        setLoading(false);
    };

    // 더보기 버튼 클릭 시 5개 또는 10개씩 증가
    const loadMoreIdols = () => {
        // 화면 크기가 1023px 이하이면 5개씩, 그 이상이면 10개씩 추가
        const increment = window.innerWidth <= 1023 ? 5 : 10;
        setDisplayCount((prev) => prev + increment); // `increment`를 사용하여 추가
    };

    return (
        <S.StyledSection>
            <S.Title>
                <S.TitleText>이달의 차트</S.TitleText>
                <S.TitleBtn>
                    <BtnIco text="차트 투표하기" icon="ic-chart.svg" onClick={() => setIsModalOpen(true)} />
                </S.TitleBtn>
                {isModalOpen && <ModalVote onOpen={setIsModalOpen} onClick={(msg) => alert(msg)} />}
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
            {loading ? (
                // 로딩 상태일 때 각 아이템에 대해 로딩 스켈레톤 표시
                Array.from({ length: displayCount }).map((_, index) => (
                    <S.RankingItem key={index}>
                        <S.LoadingSkeleton> <div className="skeleton" /> </S.LoadingSkeleton>
                    </S.RankingItem>
                ))
            ) : (
                idols.slice(0, displayCount).map((idol, index) => (
                <S.RankingItem key={idol.id}>
                    <S.ProfileIcoContainer>
                    <ProfileIco img={idol.profilePicture} />
                    {index === 0 && ( // 1위일 경우에만 왕관 표시
                        <S.CrownIcon> <img src={crownIcon} alt="왕관" /> </S.CrownIcon>
                    )}
                    </S.ProfileIcoContainer>
                    <S.RankingNumber>{index + 1}</S.RankingNumber>
                    <S.IdolText>
                        <S.IdolGroup>{idol.group}</S.IdolGroup>
                        <S.IdolName>{idol.name}</S.IdolName>
                    </S.IdolText>
                    <S.VoteCount>{idol.totalVotes.toLocaleString("ko-KR")}표</S.VoteCount>
                </S.RankingItem>
                ))
            )}
            </S.RankingGrid>

            {displayCount < idols.length && !loading && (
            <S.BasicParent>
                <div style={{ width: "327px" }}>
                    <BtnBasic onClick={loadMoreIdols}>더 보기</BtnBasic>
                </div>
            </S.BasicParent>
            )}
        </S.StyledSection>
    );
}

export default ListChart;