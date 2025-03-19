import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "./components/headers/GNB";
import Landing from "./pages/landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import Donation from "./pages/donation";
import NotFound from "./pages/notfound/Notfound";
import { ModalProvider } from "./contexts/ModalContext";
import { ToastProvider } from "./contexts/ToastContext";

function App() {
  return (
    <>
      <ToastProvider>
        <ModalProvider>
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
        </ModalProvider>
      </ToastProvider>
    </>
  );
}

export default App;
