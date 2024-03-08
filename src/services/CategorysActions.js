export function ActionsCategorys() {
  const AddCAteogry = (category) => {
    fetch("http://localhost:3000/Categorys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
  };

  const RemoveCategory = (id) => {
    fetch(`http://localhost:3000/Categorys/${id}`, {
      method: "DELETE",
    });
  };

  const UpdateCategory = (category) => {
    fetch("http://localhost:3000/Categorys", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
  };

  return { AddCAteogry, RemoveCategory, UpdateCategory };
}
