import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "./theme.ts";
import "./index.css";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import DashBoard from "./pages/DashBoard.tsx";
import Account from "./pages/Account.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <DashBoard />
      },
      {
        path: "/account",
        element: <Account />
      }
    ]
  }
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
