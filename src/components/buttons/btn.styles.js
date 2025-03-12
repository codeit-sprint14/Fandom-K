import styled from "styled-components";
import typography from "../../utils/typography";

// 공통 스타일
export const BtnBase = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    min-width: 120px;
    width: ${(props) => props.width || "295px"};
    max-width: 100%;
    height: 42px;
    gap: 10px;
    border: none;
    border-radius: 8px;
    padding: 8px;

    ${typography("b14")}
    text-align: center;

    cursor: pointer;
`;

// Btn과 BtnIco 스타일
export const BtnStyled = styled(BtnBase)`
    background: ${(props) =>
        props.variant === "gray"
            ? "linear-gradient(90deg, rgba(130, 130, 130, 1) 0%, rgba(130, 130, 130, 1) 100%)"
            : "linear-gradient(90deg, rgba(249, 109, 105, 1) 0%, rgba(254, 84, 147, 1) 100%)"};
    color: #f7f7f8;

    &:hover {
        background: ${(props) =>
            props.variant === "gray"
                ? "linear-gradient(90deg, rgba(130, 130, 130, 1) 0%, rgba(130, 130, 130, 1) 100%)"
                : "linear-gradient(90deg, rgba(249, 109, 105, 0.8) 0%, rgba(254, 84, 147, 0.8) 100%)"};
        color: #ffffff;
    }
`;

//Basic 스타일
export const BtnBasic = styled(BtnBase)`
    min-width: 327px;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;

    &:hover {
        background: rgba(255, 255, 255, 0.07);
    }
`;