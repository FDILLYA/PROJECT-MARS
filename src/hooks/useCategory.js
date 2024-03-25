import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export function useCategorys() {
  const { categorys, addCategory, removeCategory, updateCategory } =
    useContext(CategoryContext);

  const InsertBodyCategory = (elements) => {
    return elements.map((element) => {
      const CategoryBody = categorys.find(
        (category) => category.id === element.category
      );

      if (CategoryBody !== undefined) {
        return {
          ...element,
          category: CategoryBody,
        };
      }

      return {
        ...element,
        category: {
          id: 1,
          priority: 0,
          categoryname: "Undefined",
        },
      };
    });
  };

  return {
    categorys,
    InsertBodyCategory,
    addCategory,
    removeCategory,
    updateCategory,
  };
}
