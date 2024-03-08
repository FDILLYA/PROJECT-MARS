import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ElementsProvider } from "./src/context/ElementsContext";
import { FiltersProvider } from "./src/context/FiltersContext";
import { CategoryProvider } from "./src/context/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <CategoryProvider>
    <FiltersProvider>
      <ElementsProvider>
        <App />
      </ElementsProvider>
    </FiltersProvider>
  </CategoryProvider>
);
