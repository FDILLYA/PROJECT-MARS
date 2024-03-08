import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export function useCategorys() {
  const { categorys, addCategory, removeCategory, updateCategory } =
    useContext(CategoryContext);

  return { categorys, addCategory, removeCategory, updateCategory };
}
