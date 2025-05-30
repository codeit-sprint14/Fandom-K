import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "./components/headers/GNB";
import Landing from "./pages/landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import Donation from "./pages/donation";
import NotFound from "./pages/notfound/Notfound";
import { ModalProvider } from "./contexts/ModalContext";
import { ToastProvider } from "./contexts/ToastContext";
import { IdolProvider } from "./contexts/IdolContext";
import { DonationProvider } from "./contexts/DonationContext";
import { CreditProvider } from "./contexts/CreditContext";

function App() {
  return (
    <>
      <CreditProvider>
        <IdolProvider>
          <DonationProvider>
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
          </DonationProvider>
        </IdolProvider>
      </CreditProvider>
    </>
  );
}

export default App;
