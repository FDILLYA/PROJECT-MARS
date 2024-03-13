import { useId, useRef, useState } from "react";
import { useCategorys } from "../hooks/useCategory";

export function CategoryEdit({ categorys }) {
  const { updateCategory } = useCategorys();
  const unId = useId();
  const [acCateg, setacCateg] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements[0].value);
    const categoryId = Number(event.target.elements["selects"].value);
    const CategoryName = event.target.elements["categorynmae"].value;
    const Priority = Number(event.target.elements["priority"].value);

    const category = categorys.find((category) => category.id === categoryId);

    updateCategory({
      ...category,
      CategoryName,
      Priority,
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const categoryId = Number(event.target.value);

    const category = categorys.find((category) => category.id === categoryId);
    console.log(category);
    setacCateg(category);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={unId}>
        <select name="selects" id={unId} onChange={handleChange}>
          <option value=""></option>
          {categorys.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.CategoryName}
              </option>
            );
          })}
        </select>
      </label>
      {acCateg ? (
        <>
          <div>
            <input
              required
              type="text"
              name="categorynmae"
              placeholder="Nombre de Categoria"
            />
            <input
              required
              type="number"
              min={1}
              max={5}
              name="priority"
              placeholder="Ingrese Prioridad 1 - 5"
            />
          </div>
          <button type="submit">Guardar</button>
        </>
      ) : null}
    </form>
  );
}

export function CategoryDelete({ categorys }) {
  const { removeCategory } = useCategorys();
  const unId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = Number(event.target.elements[0].value);

    removeCategory(categoryId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={unId}>
        <select name="selects" id={unId}>
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
      <button type="submit">Eliminar</button>
    </form>
  );
}

export function CategoryCreate() {
  const { addCategory } = useCategorys();

  const handleSubmit = (event) => {
    event.preventDefault();
    const CategoryName = event.target.elements[0].value;
    const Priority = event.target.elements[1].value;
    console.log(CategoryName, Priority);

    addCategory({ CategoryName, Priority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="categorynmae"
        placeholder="Nombre de Categoria"
      />
      <input
        required
        type="number"
        min={1}
        max={5}
        name="priority"
        placeholder="Ingrese Prioridad 1 - 5"
      />
      <button type="submit">Crear</button>
    </form>
  );
}

export function CategoryOps({ OkCategorys }) {
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const [deleteCategory, setDeleteCategory] = useState(false);

  const handleSelectChange = (event) => {
    const value = event.target.value;

    setEdit(value === "edit");
    setCreate(value === "create");
    setDeleteCategory(value === "delete");
  };

  return (
    <>
      <header>
        <h2>Accion con Categories</h2>
      </header>

      <div>
        <select htmlFor="" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="edit">Edit</option>
          <option value="create">Create</option>
          <option value="delete">Delete</option>
        </select>
        {!edit && !create && !deleteCategory ? (
          <p>Seleccione una accion</p>
        ) : null}
        {edit ? <CategoryEdit categorys={OkCategorys}></CategoryEdit> : null}
        {create ? <CategoryCreate></CategoryCreate> : null}
        {deleteCategory ? (
          <CategoryDelete categorys={OkCategorys}></CategoryDelete>
        ) : null}
      </div>
    </>
  );
}
