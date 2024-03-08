export async function CallApi() {
  const response = await fetch("http://localhost:3000/elements", {
    method: "GET",
  });
  const data = await response.json();

  return data;
}
