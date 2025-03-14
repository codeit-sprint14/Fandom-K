<<<<<<< refs/remotes/origin/feature/list-page-je
=======
import React, { useState, useEffect } from "react";
import * as S from "./ListChart.styles";
import BtnIco from "../../components/buttons/BtnIco";
import BtnBasic from "../../components/buttons/BtnBasic";
import ProfileIco from "../../components/profiles/ProfileIco/index";
import ModalVote from "../../components/modals/ModalVote/index";
import axios from "axios";

window.localStorage.setItem("credit", 30000);

async function getIdolList(gender) {
  try {
    const response = await axios.get(
      "https://fandom-k-api.vercel.app/14-3/idols?pageSize=200"
    );
    const lists = response.data.list;
    return lists.filter((e) => e.gender === gender); // 성별 필터 적용
  } catch (error) {
    console.error("아이돌 차트 데이터를 불러오는 중 오류 발생:", error);
    return []; // 오류 발생 시 빈 배열 반환
  }
}

>>>>>>> local
function List() {
  const [isFemale, setIsFemale] = useState(true);
  const [idols, setIdols] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(10); // 처음에는 10위까지만 표시

  useEffect(() => {
    loadIdols(); // 성별 변경 시 아이돌 목록 새로 불러오기
  }, [isFemale]);

  const loadIdols = async () => {
    setLoading(true);
    const gender = isFemale ? "female" : "male";
    const idolData = await getIdolList(gender);
    setIdols(idolData);
    setDisplayCount(10); // 성별 변경 시 다시 10위까지만 보이도록 초기화
    setLoading(false);
  };

  const loadMoreIdols = () => {
    setDisplayCount((prev) => prev + 10); // 10개씩 더 보기
  };

  return (
    <>
      <S.GlobalStyle />
      <S.StyledSection>
        <S.TitleBtn>
          <S.Title>이달의 차트</S.Title>
          <div style={{ width: "148px" }}>
            <BtnIco text="차트 투표하기" icon="ic-chart.svg" onClick={() => setIsModalOpen(true)} />
          </div>
          {isModalOpen && <ModalVote onOpen={setIsModalOpen} onClick={(msg) => alert(msg)} />}
        </S.TitleBtn>

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
            <p></p>
          ) : (
            idols.slice(0, displayCount).map((idol, index) => (
              <S.RankingItem key={idol.id}>
                <S.ProfileIcoContainer>
                  <ProfileIco img={idol.profilePicture}/>
                </S.ProfileIcoContainer>
                <S.RankingNumber>{index + 1}</S.RankingNumber>
                <S.IdolText>{idol.group} {idol.name}</S.IdolText>
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
    </>
  );
}

export default List;