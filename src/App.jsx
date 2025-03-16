import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "./components/headers/GNB";
import Landing from "./pages/landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import Donation from "./pages/donation";
import NotFound from "./pages/notfound/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <GNB />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<List />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/donation/:id" element={<Donation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
