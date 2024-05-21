import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyle from "./components/globalStyle/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1032590037362-orelf982d73f51n2hofdmdmip4u8lvph.apps.googleusercontent.com">
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </GoogleOAuthProvider>

);
