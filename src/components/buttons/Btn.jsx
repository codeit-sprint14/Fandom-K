import { BtnStyled } from "./btn.styles";

const Btn = ({ disabled = false, text = "충전하기", onClick, ...rest }) => {
  return (
    <BtnStyled disabled={disabled} onClick={onClick} {...rest}>
      {text}
    </BtnStyled>
  );
};

export default Btn;
