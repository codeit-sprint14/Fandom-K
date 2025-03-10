import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import List from "./pages/list/List";
import Mypage from "./pages/mypage/Mypage";
import NotFound from "./pages/notfound/Notfound";
import BtnQuantity from "./components/buttons/BtnQuantity";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(1000);

  const handleIncrease = () => {
    setValue((prev) => prev + 1000);
  };

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

      <div>
        <input type="text" value={value} readOnly />
        <BtnQuantity clickHandler={handleIncrease}>+1,000</BtnQuantity>
      </div>
    </>
  );
}

export default App;