import { BtnBasic } from "./btn.styles";

const Basic = ({ text = "더보기", onClick }) => {
    return <BtnBasic onClick={onClick}>{text}</BtnBasic>;
};

export default Basic;