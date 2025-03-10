import { useState } from "react";
import { StyledBtn } from "./btn.styles";

const Btn = ({ variant, text = "충전하기" }) => {
    const [isCharged, setIsCharged] = useState(false);

    return (
        <StyledBtn variant={variant} onClick={() => setIsCharged(true)}>
            {text}
        </StyledBtn>
    );
};

export default Btn;