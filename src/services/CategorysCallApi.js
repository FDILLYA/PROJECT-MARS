export async function CategorysCallApi() {
  const response = await fetch("http://localhost:1234/Categorys", {
    method: "GET",
  });
  const data = await response.json();

  return data;
}
