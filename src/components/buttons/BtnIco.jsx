import { useState } from "react";
import { StyledBtn } from "./btn.styles";

const BtnIco = ({ variant, text = "충전하기" }) => {
    const [isCharged, setIsCharged] = useState(false);

    return (
        <StyledBtn variant={variant} onClick={() => setIsCharged(true)}>
            {<img src="../src/assets/icons/ic-check.svg" alt="" width={20} />}
            {text}
        </StyledBtn>
    );
};

export default BtnIco;