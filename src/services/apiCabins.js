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

export async function deleteCabin(id) {
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

  return null;
}
