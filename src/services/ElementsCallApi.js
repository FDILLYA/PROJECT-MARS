export async function CallApi() {
  const response = await fetch(
    "https://mars-api-dev-xndm.4.us-1.fl0.io/elements",
    {
      method: "GET",
    }
  );

  const data = await response.json();

  return data;
}
