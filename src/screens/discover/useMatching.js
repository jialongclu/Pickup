export async function createInteraction(swipe, userIdTwo) {
  const data = {
    userIdOne: localStorage.getItem("id"),
    userIdTwo: userIdTwo,
    swiped: swipe,
  };
  try {
    await fetch(`https://pickup-server-heroku.herokuapp.com/interaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return;
  } catch (error) {
    alert("Sorry we were not able to record your swipe");
  }
}

export async function sanitizeUsers(users) {
  const id = localStorage.getItem("id");
  try {
    let interactions = await fetch(
      `https://pickup-server-heroku.herokuapp.com/interaction/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    interactions = interactions.json();

    const sanitizedUsers = users.filter((user) => {
      if (interactions.length === 0) {
        return user;
      }
      for (const interaction of interactions) {
        return (
          (interaction.userIdOne !== user._id) | (interaction.userIdOne !== id)
        );
      }
    });
    return sanitizedUsers;
  } catch (error) {
    alert("Sorry we were not able to get you options");
  }
}
