import { useId, useRef, useState } from "react";
import { useCategorys } from "../hooks/useCategory";

export function CategoryEdit() {
  const { categorys, updateCategory } = useCategorys();
  const unId = useId();
  const [acCateg, setacCateg] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements[0].value);
    const categoryId = Number(event.target.elements["selects"].value);
    const CategoryName = event.target.elements["categorynmae"].value;
    const Priority = event.target.elements["priority"].value;

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
            <input type="text" name="categorynmae" />
            <input type="number" name="priority" />
          </div>
          <button type="submit">Guardar</button>
        </>
      ) : null}
    </form>
  );
}

export function CategoryDelete() {
  const { categorys, removeCategory } = useCategorys();
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
      <input type="text" placeholder="Ingrese nombre de la categoria" />
      <input min="1" max="5" type="number" placeholder="Ingrese Prioridad" />
      <button type="submit">Crear</button>
    </form>
  );
}

export function CategoryOps() {
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
      <h2>Accion con Categories</h2>
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
        {edit ? <CategoryEdit></CategoryEdit> : null}
        {create ? <CategoryCreate></CategoryCreate> : null}
        {deleteCategory ? <CategoryDelete></CategoryDelete> : null}
      </div>
    </>
  );
}
