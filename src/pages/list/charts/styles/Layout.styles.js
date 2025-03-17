// 레이아웃 및 제목 스타일
import styled from 'styled-components';
import typography from "../../../../utils/typography";

// 전체적인 스타일 컴포넌트 정의
export const StyledSection = styled.section`
    box-sizing: border-box;
    flex-direction: column;
    white-space: nowrap;
    width: 1200px;
    height: 100%;
    margin: 0px auto 100px;

    @media (max-width: 1023px) {  
        width: 700px;
        margin: 60px auto;
    }

    @media (max-width: 767px) {  
        width: 327px;
        margin: 40px auto;
    }
`;

// 타이틀 스타일(제목, '투표하기' 버튼)
export const Title = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;

    @media (max-width: 1023px) {  
        width: 700px;
        height: 32px;
    }

    @media (max-width: 767px) {  
        width: 327px;
    }
`;

export const TitleText = styled.h2`
    ${typography("b24")};
    font-family: Pretendard;
    margin-right: 930px;
    margin-bottom: 16px;

    @media (max-width: 1023px) {  
        margin-right: 440px;
        margin-bottom: 6px;
        ${typography("b20")};
    }

    @media (max-width: 767px) {  
        margin-right: 110px;
        ${typography("b16")};
    }
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