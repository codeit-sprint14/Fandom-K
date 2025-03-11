import { useState } from "react";
import { BtnStyled } from "./btn.styles";

const BtnIco = ({ variant, text = "충전하기", icon = "ic-check.svg", width }) => {
    const [isCharged, setIsCharged] = useState(false);

    return (
        <BtnStyled variant={variant} width={width} onClick={() => setIsCharged(true)}>
            <img src={`../src/assets/icons/${icon}`} alt="" width={20} />
            {text}
        </BtnStyled>
    );
};

export default BtnIco;