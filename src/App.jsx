import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import NotFound from "./pages/notfound/Notfound";
import GNB from "./components/headers/GNB";

function App() {
  return (
    <>
      <BrowserRouter>
        <GNB />
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
