import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import DiamondPriceCalculatorPage from "./pages/DiamondPriceCalculatorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/diamond-price-calculator"
          element={<DiamondPriceCalculatorPage />}
        />
      </Routes>
    </>
  );
}

export default App;
