import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import NotFound from "./pages/notfound/Notfound";

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
    </>
  );
}

export default App;
