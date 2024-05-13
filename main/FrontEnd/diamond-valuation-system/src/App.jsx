import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import SignUpPage from "./pages/SignUpPage";
import DiamondPriceCalculatorPage from "./pages/DiamondPriceCalculatorPage";

function App() {
  return (
    <>
      {!(window.location.pathname === "/signup") && <Header />}
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/diamond-price-calculator"
          element={<DiamondPriceCalculatorPage />}
        />
      </Routes>
    </>
  );
}

export default App;
