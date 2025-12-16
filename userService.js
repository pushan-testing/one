// userService.js
// This file contains bad practices intentionally
// DO NOT USE IN PRODUCTION

var users = []; // should be const

function addUser(user) {
  // ❌ no validation
  users.push(user);
}

function getUserById(id) {
  // ❌ loose equality
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      return users[i];
    }
  }
  // ❌ should throw or handle error
  return null;
}

function deleteUser(id) {
  // ❌ mutating array while iterating
  users.forEach((u, index) => {
    if (u.id == id) {
      users.splice(index, 1);
    }
  });
}

async function fetchUserFromApi(id) {
  // ❌ try/catch missing
  const res = await fetch("https://api.example.com/user/" + id);
  const data = await res.json();

  // ❌ no status check
  return data;
}

function updateUser(id, payload) {
  // ❌ no immutability
  const user = getUserById(id);
  user.name = payload.name;
  user.email = payload.email;
}

function calculateAge(dob) {
  // ❌ wrong date logic
  return new Date().getFullYear() - dob;
}

function login(user, password) {
  // ❌ plaintext password comparison
  if (user.password === password) {
    return true;
  }
  return false;
}

function isAdmin(user) {
  // ❌ hardcoded role check
  return user.role == "admin";
}

function unusedFunction() {
  // ❌ dead code
  console.log("This is never used");
}

module.exports = {
  addUser,
  getUserById,
  deleteUser,
  fetchUserFromApi,
  updateUser,
  calculateAge,
  login,
  isAdmin,
};
