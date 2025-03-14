import { BasicStyled } from "./btn.styles";

const BtnBasic = ({ text = "더보기", onClick, ...rest  }) => {
    return <BasicStyled onClick={onClick} {...rest}>{text}</BasicStyled>;
};

export default BtnBasic;
