import * as S from "./style";

function Toast({ msg }) {
  return (
    <S.Container>
      <img src="src/assets/icons/ic-check-color.svg" />
      <S.Msg>{msg}</S.Msg>
    </S.Container>
  );
}

export default Toast;
