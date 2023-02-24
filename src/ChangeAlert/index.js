import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
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

export { ChangeAlert };
