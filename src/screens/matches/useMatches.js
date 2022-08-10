export async function getMatches() {
  const id = localStorage.getItem("id");
  try {
    const response = await fetch(`http://localhost:3001/match/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    alert("Sorry we were not able to record your swipe");
  }
}
