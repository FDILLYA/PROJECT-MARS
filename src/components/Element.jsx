import { useId, useState } from "react";
import { useElements } from "../hooks/useElements";
import { useCategorys } from "../hooks/useCategory";

export function ElementCreate({ setisAgregate }) {
  const unId = useId();
  const { categorys } = useCategorys();

  const { addElement } = useElements();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Number(event.target.elements["selects"].value);
    const category = categorys.find((category) => category.id === id);

    const name = event.target.elements.name.value;
    const description = event.target.elements.description.value;
    const weight = event.target.elements.weight.value;

    const toupdateElement = {
      name: name,
      description: description,
      weight: weight,
      Category: {
        ...category,
      },
    };

    addElement(toupdateElement);
    setisAgregate(false);
  };

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={unId}>
            <select name="selects" id={unId}>
              {categorys.map((category) => {
                return (
                  <option key={category.CategoryName} value={category.id}>
                    {category.CategoryName}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div>
          <input
            required
            name="name"
            type="text"
            placeholder="Nombre del Elemento"
          />
          <input
            required
            name="weight"
            type="number"
            placeholder="Peso del elemento"
          />
          <input
            name="description"
            type="text"
            placeholder="Descripción del elemento"
          />
        </div>
        <footer>
          <button type="submit">Agregar</button>
        </footer>
      </form>
    </li>
  );
}

export function ElementEdit({ element, setisEdit }) {
  const unId = useId();
  const { categorys } = useCategorys();

  const { updateElement } = useElements();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Number(event.target.elements["selects"].value);
    const category = categorys.find((category) => category.id === id);

    const name = event.target.elements.name.value;
    const description = event.target.elements.description.value;
    const weight = event.target.elements.weight.value;

    const toupdateElement = {
      ...element,
      name: name,
      description: description,
      weight: weight,
      Category: {
        ...category,
      },
    };

    updateElement(toupdateElement);
    setisEdit(false);
  };

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={unId}>
            <select
              name="selects"
              id={unId}
              defaultValue={element.Category.CategoryName}
            >
              {categorys.map((category) => {
                console.log(category);
                return (
                  <option key={category.CategoryName} value={category.id}>
                    {category.CategoryName}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div>
          <input
            required
            name="name"
            type="text"
            placeholder="Nombre del Elemento"
            defaultValue={element.name}
          />
          <input
            required
            name="weight"
            type="number"
            placeholder="Peso del elemento"
            defaultValue={element.weight}
          />
          <input
            name="description"
            type="text"
            placeholder="Descripción del elemento"
            defaultValue={element.description}
          />
        </div>
        <footer>
          <button type="submit">Guardar</button>
        </footer>
      </form>
    </li>
  );
}

export function ElementView({ element }) {
  const { removeElement } = useElements();
  const { categorys } = useCategorys();

  const CategoryExist = categorys.find(
    (category) => category.id === element.Category.id
  );

  console.log(CategoryExist);

  return (
    <li>
      <article>
        <div>
          <h2>{element.Category.Priority}</h2>
          <h2>{element.Category.CategoryName}</h2>
        </div>
        <div>
          <h3>{element.name} </h3>
          <h4>{element.weight}</h4>
          <p>{element.description}</p>
        </div>
        <footer>
          <button onClick={() => removeElement(element.id)}>Eliminar</button>
        </footer>
      </article>
      {CategoryExist === undefined ? <p>Category not found</p> : null}
    </li>
  );
}

export function ElementItem({ element }) {
  const [isEdit, setisEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <ElementEdit setisEdit={setisEdit} element={element}></ElementEdit>
      ) : (
        <ElementView element={element}></ElementView>
      )}

      <button
        onClick={() => {
          setisEdit(!isEdit);
        }}
      >
        {isEdit ? <p>Cancelar</p> : <p>Editar</p>}
      </button>
    </>
  );
}
