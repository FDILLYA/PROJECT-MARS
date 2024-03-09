import { useState } from "react";
import { useElements } from "../hooks/useElements";
import { ElementItem } from "./Element";
import { useCategorys } from "../hooks/useCategory";

export default function Elements({ elements }) {
  const { categorys } = useCategorys();

  const category1sum = elements.filter((element) => element.Category.id === 1);
  console.log(category1sum);

  const totalCategories = categorys.map((category) => {
    const categorysum = elements.filter(
      (element) => element.Category.id === category.id
    );
    const sumaelements = categorysum.reduce(
      (acc, element) => acc + Number(element.weight),
      0
    );

    return {
      CategoryName: category.CategoryName,
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
            <ElementItem key={element.id} element={element}></ElementItem>
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
              <li key={category.CategoryName}>
                <header>
                  <h4>{category.CategoryName}</h4>
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
