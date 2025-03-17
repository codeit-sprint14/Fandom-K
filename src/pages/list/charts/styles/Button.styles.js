// 버튼 스타일
import styled from 'styled-components';
import typography from "../../../../utils/typography";
import colors from "../../../../utils/colors";

// 이달의 여자, 남자 아이돌 버튼 스타일
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    margin-bottom: 22px;
`;

export const TabButton = styled.button`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    height: 48px;
    border: none;
    border-bottom: ${({ active }) => (active ? "1px solid white" : "1px solid rgba(255, 255, 255, 0.2)")};
    background: ${({ active }) => (active ? "#FFFFFF1A" : "transparent")};
    color: ${({ active }) => (active ? "white" : colors("gray"))};
    ${typography("m14")};
    cursor: pointer;
`;

// 더보기 버튼 스타일
export const BasicParent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 118px;
`;