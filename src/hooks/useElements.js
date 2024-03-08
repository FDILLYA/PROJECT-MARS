import { useContext } from "react";
import { ElementsContext } from "../context/ElementsContext";

export function useElements() {
  const { elements, addElement, removeElement, updateElement } =
    useContext(ElementsContext);

  return { elements, addElement, removeElement, updateElement };
}
