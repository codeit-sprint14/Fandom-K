import { useState } from "react";
import { BtnStyled } from "./btn.styles";

const Btn = ({ variant, text = "충전하기", width }) => {
    const [isCharged, setIsCharged] = useState(false);

    return (
        <BtnStyled variant={variant} width={width} onClick={() => setIsCharged(true)}>
            {text}
        </BtnStyled>
    );
};

export default Btn;