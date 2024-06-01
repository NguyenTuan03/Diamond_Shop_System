import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContext from "./components/GlobalContext/AuthContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <AuthContext>
            <App />
        </AuthContext>
    </ChakraProvider>
);
