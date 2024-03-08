export async function CategorysCallApi() {
  const response = await fetch("http://localhost:3000/Categorys", {
    method: "GET",
  });
  const data = await response.json();

  return data;
}
