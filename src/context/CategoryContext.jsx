import { createContext, useReducer } from "react";
import {
  Categorysreducer,
  initialStateCategorys,
} from "../reducer/CategorysCall";

function useCategorysReducer() {
  const [categorys, dispatch] = useReducer(
    Categorysreducer,
    initialStateCategorys
  );

  const addCategory = (category) => {
    dispatch({ type: "ADD_CATEGORY", payload: category });
  };

  const removeCategory = (categoryName) => {
    dispatch({ type: "REMOVE_CATEGORY", payload: categoryName });
  };

  const updateCategory = (category) => {
    dispatch({ type: "UPDATE_CATEGORY", payload: category });
  };

  return { categorys, addCategory, removeCategory, updateCategory };
}

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const { categorys, addCategory, removeCategory, updateCategory } =
    useCategorysReducer();

  return (
    <CategoryContext.Provider
      value={{ categorys, addCategory, removeCategory, updateCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
