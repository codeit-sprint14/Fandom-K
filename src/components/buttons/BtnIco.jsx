import { BtnStyled } from "./btn.styles";

const BtnIco = ({
  disabled = false,
  text = "충전하기",
  icon = "ic-check.svg",
  onClick,
  ...rest
}) => {
  return (
    <BtnStyled disabled={disabled} onClick={onClick} {...rest}>
      <img src={`../src/assets/icons/${icon}`} alt="" width={20} />
      {text}
    </BtnStyled>
  );
};

export default BtnIco;
