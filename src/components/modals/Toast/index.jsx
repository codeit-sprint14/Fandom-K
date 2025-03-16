import * as S from "./style";
import CheckIcon from "../../../assets/icons/ic-check-color.svg";

function Toast({ msg }) {
  return (
    <S.Container>
      <img src={CheckIcon} />
      <S.Msg>{msg}</S.Msg>
    </S.Container>
  );
}

export default Toast;
