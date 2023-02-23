import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    // toggleShow(false);
    // return <p>synchronizing</p>;
    return (
      <div>
        <p>Hubo cambios en otras ventanas!!!</p>
        <button onClick={() => toggleShow(false)}>
          Volver a sincronizar la informacion
        </button>
      </div>
    );
  }
  return <p>Sincronized!!!</p>;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
