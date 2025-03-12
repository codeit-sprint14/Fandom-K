import { BtnStyled } from "./btn.styles";

const BtnIco = ({ variant, text = "충전하기", icon = "ic-check.svg", onClick }) => {
    return (
        <BtnStyled variant={variant} onClick={onClick}>
            <img src={`../src/assets/icons/${icon}`} alt="" width={20} />
            {text}
        </BtnStyled>
    );
};

export default BtnIco;