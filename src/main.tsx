import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import MainLayout from "./Layout/MainLayout.tsx";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="p-4">
    <Provider store={store}>
      <StrictMode>
        <MainLayout />
        {/* <App /> */}
      </StrictMode>
    </Provider>
  </div>
);
