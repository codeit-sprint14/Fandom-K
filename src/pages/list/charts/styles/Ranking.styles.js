// 차트 및 스켈레톤 스타일
import styled from 'styled-components';
import typography from "../../../../utils/typography";
import colors from "../../../../utils/colors";

// 1~10(5위) 차트 스타일
export const RankingGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    column-gap: 20px;
    row-gap: 0;
    padding: 0;
    list-style: none;
    height: auto;
    min-height: 400px;
    width: 100%;
`;

export const RankingItem = styled.li`
    display: flex;
    align-items: center;
    flex-grow: 1;

    width: 370px;
    max-width: 540px;
    height: 86px;
    gap: 0px;
    padding: 8px 18px;
    background: transparent;
    border-bottom: ${({ isLastItem }) => (isLastItem ? "none" : "1px solid #FFFFFF1A")};
    box-sizing: border-box;
`;

export const ProfileIcoContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 70px;
    height: 70px;
    margin-right: 12px;
`;

export const CrownIcon = styled.div`
  position: absolute;
  top: -20px;
  right: -12px;
  transform: rotate(40deg);
  padding: 5px;
  z-index: 1;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const RankingNumber = styled.span`
    color: ${colors("primaryOrange")};
    ${typography("r14")};
    font-family: "Pretendard";
    margin-right: 12px;
    
`;

export const IdolText = styled.span`
    display: flex;
    flex-direction: column;
    gap: 6px;
    ${typography("m14")};
    font-family: "Pretendard";
    flex-grow: 1;
`;

export const IdolGroup = styled.span`
    color: ${colors("grayLight")};
`

export const IdolName = styled.span`
    color: ${colors("whiteLight")};
`

export const VoteCount = styled.span`
    color: ${colors("grayLight")};
    ${typography("r14")};
    font-family: "Pretendard";
`;