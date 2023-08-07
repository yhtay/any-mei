// Database
const users = [];

// CRUD Methods
exports.getAllUsers = async () => {
  return users;
};

exports.getUserById = async (id) => {
  return users.find((user) => user.id === id);
};

exports.createUser = async (userData) => {
  const newUser = { ...userData, id: Date.now().toString() };
  users.push(newUser);
  return newUser;
};

exports.updateUser = async (id, userData) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    return users[index];
  }
  return null;
};

exports.deleteUser = async (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};
