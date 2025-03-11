import { BtnBasic } from "./btn.styles";

const Basic = ({ onClick, text = "더보기" }) => {
    return <BtnBasic onClick={onClick}>{text}</BtnBasic>;
};

export default Basic;