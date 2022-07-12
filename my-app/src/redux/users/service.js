const getUsers = async () => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'GET'
  });
  return response.json();
};

const getUser = async (id) => {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: 'GET'
  });
  return response.json();
};

const updateUser = async ({ id, updatedFields }) => {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedFields)
  });

  return response.json();
};

export default {
  getUsers,
  getUser,
  updateUser
};