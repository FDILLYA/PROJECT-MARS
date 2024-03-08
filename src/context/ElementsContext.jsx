import { createContext, useReducer } from "react";
import { Elementsreducer, initialState } from "../reducer/ElementsCall";

export function ElementsuseReducer() {
  const [elements, dispatch] = useReducer(Elementsreducer, initialState);

  const addElement = (element) => {
    dispatch({ type: "ADD_ELEMENT", payload: element });
  };

  const removeElement = (id) => {
    dispatch({ type: "REMOVE_ELEMENT", payload: id });
  };

  const updateElement = (element) => {
    dispatch({ type: "UPDATE_ELEMENT", payload: element });
  };

  return { elements, addElement, removeElement, updateElement };
}

export const ElementsContext = createContext();

export function ElementsProvider({ children }) {
  const { elements, addElement, removeElement, updateElement } =
    ElementsuseReducer();

  return (
    <ElementsContext.Provider
      value={{ elements, addElement, removeElement, updateElement }}
    >
      {children}
    </ElementsContext.Provider>
  );
}
