import { BasicBtn } from "./btn.styles";

const Basic = ({ onClick, text = "더보기" }) => {
    return <BasicBtn onClick={onClick}>{text}</BasicBtn>;
};

export default Basic;