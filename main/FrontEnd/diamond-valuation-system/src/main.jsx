import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyle from "./components/globalStyle/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <GoogleOAuthProvider>
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </GoogleOAuthProvider>
    </ChakraProvider>
);
