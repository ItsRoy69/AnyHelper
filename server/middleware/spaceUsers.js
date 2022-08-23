const users = [];

const addUser = ({ id, username, spacename }) => {
  // username = username.trim().toLowerCase();
  // spacename = spacename.trim().toLowerCase();

  const existingUser = users.find((user) => {
    //    return user.username === username && user.spacename === spacename;
    return user.id === id;
  });

  const user = { id, username, spacename };

  if (existingUser) {
    return { user };
  }

  users.push(user);

  return { user };
};

const getUser = (id) => {
  console.log(`users`, users, id);
  return users.find((user) => user.id === id);
};

module.exports = { addUser, getUser };

