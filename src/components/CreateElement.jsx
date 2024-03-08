import { useState } from "react";
import { ElementCreate, ElementEdit } from "./Element";

export function CreateElement() {
  const [isAgregate, setIsAgregate] = useState(false);

  return (
    <>
      {isAgregate ? (
        <ElementCreate setisAgregate={setIsAgregate}></ElementCreate>
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
