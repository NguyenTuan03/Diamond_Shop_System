import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <GoogleOAuthProvider>
      <App />
    </GoogleOAuthProvider>
  </ChakraProvider>
);
