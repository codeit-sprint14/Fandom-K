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

    ${typography("b14")}
    text-align: center;

    cursor: pointer;
`;

// Btn과 BtnIco 스타일
export const BtnStyled = styled(BtnBase)`
    background: ${(props) =>
        props.variant === "gray"
            ? colors("gray")(props)
            : "linear-gradient(90deg, rgba(249, 109, 105, 1) 0%, rgba(254, 84, 147, 1) 100%)"};
    color: #f7f7f8;

    &:hover {
        background: ${(props) =>
            props.variant === "gray"
                ? colors("gray")(props)
                : "linear-gradient(90deg, rgba(249, 109, 105, 0.8) 0%, rgba(254, 84, 147, 0.8) 100%)"};
        color: #ffffff;
    }
`;

//Basic 스타일
export const BtnBasic = styled(BtnBase)`
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;

    &:hover {
        background: rgba(255, 255, 255, 0.07);
    }
`;