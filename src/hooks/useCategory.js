import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export function useCategorys() {
  const { categorys, addCategory, removeCategory, updateCategory } =
    useContext(CategoryContext);

  const InsertBodyCategory = (elements) => {
    return elements.map((element) => {
      const CategoryBody = categorys.find(
        (category) => category.id === element.Category
      );

      if (CategoryBody !== undefined) {
        return {
          ...element,
          Category: CategoryBody,
        };
      }

      return {
        ...element,
        Category: {
          id: 1,
          Priority: 0,
          CategoryName: "Undefined",
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
