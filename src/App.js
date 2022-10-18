import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CongratulationPage from "./pages/CongratulationPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<CongratulationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
