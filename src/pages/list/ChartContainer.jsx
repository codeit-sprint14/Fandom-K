import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import BtnIco from "../../components/buttons/BtnIco";
import Basic from "../../components/buttons/Basic";
import typography from "../../utils/typography";
import colors from "../../utils/colors";

// 글로벌 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors("blackDark")};
    color: ${colors("whiteLight")};
    margin: 0;
    padding: 0;
  }
`;

// 이달의 차트, 차트 투표하기
const StyledSection = styled.section`
    white-space: nowrap;
    margin: 149px 360px 152px;
`;

const Row1 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
`;

const Title = styled.h2`
    ${typography("b24")};
    margin-right: 942px;
    margin-bottom: 16px;
`;

// 여자아이돌, 남자아이돌 선택 버튼
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 22px;
`;

const TabButton = styled.button`
    width: 600px;
    height: 48px;
    padding: 15.5px 248px;
    border: none;
    border-bottom: ${({ active }) => (active ? "1px solid #FFFFFF" : "1px solid #FFFFFF33")};
    background: ${({ active }) => (active ? "#FFFFFF1A" : "transparent")};
    color: white;
    font-size: 16px;
    cursor: pointer;
`;

// 순위표
const RankingGrid = styled.ul`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 0;
    padding: 0;
    list-style: none;
`;

const RankingItem = styled.li`
    display: flex;
    align-items: center;
    width: 560px;
    height: 86px;
    gap: 8px;
    padding: 8px 18px;
    background: transparent;
    border-bottom: ${({ isLastItem }) => (isLastItem ? "none" : "1px solid #FFFFFF1A")};
    box-sizing: border-box;
`;

const RankingNumber = styled.span`
    color: ${colors("primaryOrange")};
    ${typography("r14")};
    margin-right: 12px;
`;

const IdolText = styled.span`
    color: ${colors("whiteLight")};
    ${typography("m14")};
    margin-right: 284px;
`;

const VoteCount = styled.span`
    color: ${colors("grayLight")};
    ${typography("r14")};
`;

const BasicParent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 118px;
`;

// 기본 데이터 (예시로 100개의 데이터로 생성)
const generateRankings = (total = 100) => {
    return [...Array(total)].map((_, index) => ({
        id: index + 1,
        name: `아이돌 ${index + 1}`,
        voteCount: `${(index + 1) * 1000000}표`
    }));
};

function ChartContainer() {
    const [isFemale, setIsFemale] = useState(true);
    const [visibleItems, setVisibleItems] = useState(10);  // 처음에는 10개만 보이도록 설정
    const rankings = generateRankings();  // 데이터 생성

    const handleShowMore = () => {
        setVisibleItems((prev) => prev + 10);  // "더 보기" 버튼 클릭 시 10개씩 추가
    };

    return (
        <>
            <GlobalStyle />
            <StyledSection>
                <Row1>
                    <Title>이달의 차트</Title>
                    <div style={{ width: "148px" }}>
                        <BtnIco text="차트 투표하기" icon="ic-chart.svg" />
                    </div>
                </Row1>

                <ButtonGroup>
                    <TabButton active={isFemale} onClick={() => setIsFemale(true)}>
                        이달의 여자 아이돌
                    </TabButton>
                    <TabButton active={!isFemale} onClick={() => setIsFemale(false)}>
                        이달의 남자 아이돌
                    </TabButton>
                </ButtonGroup>

                <RankingGrid>
                    {rankings.slice(0, visibleItems).map((item, index) => {
                        const isLastItem = index === visibleItems - 1;  // 마지막 항목인지 확인
                        const isSecondLastItem = index === visibleItems - 2;  // 두 번째 마지막 항목인지 확인
                        return (
                            <RankingItem key={item.id} isLastItem={isLastItem || isSecondLastItem}>
                                이미지
                                <RankingNumber>{item.id}</RankingNumber>
                                <IdolText isFemale={isFemale}>{isFemale ? `여자 아이돌 ${item.id}` : `남자 아이돌 ${item.id}`}</IdolText>
                                <VoteCount>{item.voteCount}</VoteCount>
                            </RankingItem>
                        );
                    })}
                </RankingGrid>

                {visibleItems < rankings.length && (  // 10개씩 더 불러올 수 있을 때만 버튼 표시(어떻게 할건지 고민)
                    <BasicParent>
                        <div style={{ width: "327px" }}>
                            <Basic onClick={handleShowMore}>더 보기</Basic>
                        </div>
                    </BasicParent>
                )}
            </StyledSection>
        </>
    );
}

export default ChartContainer;