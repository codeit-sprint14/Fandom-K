import styled from "styled-components";
import typography from "../../utils/typography";
import colors from "../../utils/colors";

// 공통 스타일
export const BtnBase = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 42px;
    gap: 10px;
    border: none;
    border-radius: 8px;
    padding: 8px;

    box-sizing: border-box;
    transition: all 0.1s ease-in-out;

    ${typography("b14")}
    text-align: center;

    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
`;

// Btn과 BtnIco 스타일
export const BtnStyled = styled(BtnBase)`
    background: ${(props) =>
        props.disabled ? colors("gray") : colors("primaryGradient90")};
    color: white;

    &:hover {
        filter: ${(props) =>
            props.disabled || "brightness(0.8)"};
    }
`;

//Basic 스타일
export const BasicStyled = styled(BtnBase)`
    background: rgba(255, 255, 255, 0.1);
    color: white;

    &:hover {
        background: rgba(255, 255, 255, 0.07);
    }
`;
