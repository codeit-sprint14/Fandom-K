import { BtnStyled } from "./btn.styles";

const Btn = ({ variant, text = "충전하기", onClick }) => {
    return (
        <BtnStyled variant={variant} onClick={onClick}>
            {text}
        </BtnStyled>
    );
};

export default Btn;