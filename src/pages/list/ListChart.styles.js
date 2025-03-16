import styled, { createGlobalStyle } from "styled-components";
import typography from "../../utils/typography";
import colors from "../../utils/colors";

// 스타일 컴포넌트 정의
export const StyledSection = styled.section`
    white-space: nowrap;
    margin: 149px 360px 152px;
`;

export const TitleBtn = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
`;

export const Title = styled.h2`
    ${typography("b24")};
    margin-right: 942px;
    margin-bottom: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    margin-bottom: 22px;
`;

export const TabButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 48px;
    padding: 15.5px 248px;
    border: none;
    border-bottom: ${({ active }) => (active ? "1px solid white" : "1px solid rgba(255, 255, 255, 0.2)")};
    background: ${({ active }) => (active ? "#FFFFFF1A" : "transparent")};
    color: ${({ active }) => (active ? "white" : colors("gray"))};
    font-size: 16px;
    cursor: pointer;
`;

export const RankingGrid = styled.ul`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    row-gap: 0;
    padding: 0;
    list-style: none;
`;

export const RankingItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 560px;
    height: 86px;
    gap: 0px;
    padding: 8px 18px;
    background: transparent;
    border-bottom: ${({ isLastItem }) => (isLastItem ? "none" : "1px solid #FFFFFF1A")};
    box-sizing: border-box;
`;

export const ProfileIcoContainer = styled.div`
    width: 70px;
    height: 70px;
    margin-right: 12px;
`;

export const RankingNumber = styled.span`
    color: ${colors("primaryOrange")};
    ${typography("r14")};
    margin-right: 12px;
`;

export const IdolText = styled.span`
    color: ${colors("whiteLight")};
    ${typography("m14")};
    margin-right: auto;
`;

export const VoteCount = styled.span`
    color: ${colors("grayLight")};
    ${typography("r14")};
    margin-left: auto;
`;

export const BasicParent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 118px;
`;
