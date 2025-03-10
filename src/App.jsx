import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import NotFound from "./pages/notfound/Notfound";
import BtnQuantity from "./components/buttons/BtnQuantity";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
          <Route path="/mypage" element={<Mypage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <BtnQuantity onClick={() => alert("버튼 클릭!")}>+1,000</BtnQuantity>
      </div>
    </>
  );
}

export default App;
