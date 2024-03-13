import { useState } from "react";
import { ElementCreate, ElementEdit } from "./Element";

export function CreateElement({ categorys }) {
  const [isAgregate, setIsAgregate] = useState(false);

  return (
    <>
      <header>
        <h2>Creacíon de Elementos</h2>
      </header>
      {isAgregate ? (
        <ElementCreate
          categorys={categorys}
          setisAgregate={setIsAgregate}
        ></ElementCreate>
      ) : null}
      <button
        onClick={() => {
          setIsAgregate(!isAgregate);
        }}
      >
        {isAgregate ? "Cancelar" : "Agregar"}
      </button>
    </>
  );
}
