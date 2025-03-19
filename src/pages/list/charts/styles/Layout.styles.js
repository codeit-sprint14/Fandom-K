// 레이아웃 및 제목 스타일
import styled from 'styled-components';
import typography from "../../../../utils/typography";

// 전체적인 스타일 컴포넌트 정의
export const StyledSection = styled.section`
    box-sizing: border-box;
    flex-direction: column;

    white-space: nowrap;
    width: 100%;
    max-width: 1200px;
    min-width: 400px;
    height: 100%;
    margin: 0px auto 100px;
    padding: 0 48px;
`;

// 타이틀 스타일(제목, '투표하기' 버튼)
export const Title = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    width: 100%;
`;

export const TitleText = styled.h2`
    ${typography("b24")};
`;

export const TitleBtn = styled.div`
    width: 148px;
    height: 42px;
    ${typography("b14")};

    @media (max-width: 1023px) {  
        width: 128px;
        height: 32px;
        ${typography("b13")};
    }
`;