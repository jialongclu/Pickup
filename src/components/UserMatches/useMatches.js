export async function getMatches() {
  const id = localStorage.getItem("id");
  try {
    const response = await fetch(`https://pickup-server-heroku.herokuapp.com/match/${id}`, {
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
