export async function CategorysCallApi() {
  const response = await fetch(
    "https://mars-api-dev-xndm.4.us-1.fl0.io/categories",
    {
      method: "GET",
    }
  );
  const data = await response.json();

  return data;
}
