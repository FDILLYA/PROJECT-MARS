export function ActionsElements() {
  const addElementAPI = (element) => {
    fetch("http://localhost:3000/elements", {
      method: "ADD",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(element),
    });
  };

  const removeElementAPI = (id) => {
    fetch(`http://localhost:3000/elements/${id}`, {
      method: "DELETE",
    });
  };

  const updateElementAPI = (element) => {
    fetch("http://localhost:3000/elements", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(element),
    });
  };

  return { addElementAPI, removeElementAPI, updateElementAPI };
}
