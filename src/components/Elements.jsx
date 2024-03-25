import { useState } from "react";
import { useElements } from "../hooks/useElements";
import { ElementItem } from "./Element";
import { useCategorys } from "../hooks/useCategory";

export default function Elements({ elements, okCategorys }) {
  const { categorys } = useCategorys();

  const totalCategories = categorys.map((category) => {
    const categorysum = elements.filter(
      (element) => element.category.id === category.id
    );
    const sumaelements = categorysum.reduce(
      (acc, element) => acc + Number(element.weight),
      0
    );

    return {
      categoryname: category.categoryname,
      sumaelements,
    };
  });

  console.log(totalCategories);
  return (
    <>
      <div>
        <h2>Elementos</h2>
        <ul>
          {elements.map((element) => (
            <ElementItem
              categorys={okCategorys}
              key={element.id}
              element={element}
            ></ElementItem>
          ))}
        </ul>
      </div>
      <div>
        <header>
          <h2>Suma total por Categoria </h2>
        </header>
        <ul>
          {totalCategories.map((category) => {
            return (
              <li key={category.categoryname}>
                <header>
                  <h4>{category.categoryname}</h4>
                </header>
                <p>{category.sumaelements}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
