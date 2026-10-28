import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import A_mountingPhase from "./A_mountingPhase.jsx";
import B_updatingPhase from "./B_updatingPhase.jsx";
import C_unmountiongPhase from "./C_unmountingPhase.jsx";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>{show && <B_updatingPhase />}</div>

      <div className="mt-3">
        <button onClick={() => setShow(false)}> Hide the Page </button>
        <button onClick={() => setShow(true)}> Show the page </button>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>,
);
