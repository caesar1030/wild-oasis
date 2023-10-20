export async function getCabins() {
  const res = await fetch(import.meta.env.VITE_BASE_URL + "/cabins", {
    method: "GET",
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
    },
  });

  if (!res.ok) throw new Error("");

  const data = await res.json();
  return data;
}

export async function deleteCabins(id) {
  const res = await fetch(
    import.meta.env.VITE_BASE_URL + `/cabins?id=eq.${id}`,
    {
      method: "DELETE",
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to delete cabin");

  if (res.headers.get("content-type")?.includes("application/json")) {
    const data = await res.json();
    console.log(data, res);
    return data;
  }

  console.log("Deleted successfully without JSON response", res);
  return null; // or return some default value or message
}
