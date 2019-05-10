function login(name) {
  window.localStorage.setItem('user', name)
}

function logout() {
  window.localStorage.removeItem('user');
}

function getUser() {
  return window.localStorage.getItem('user')
}

export {login, logout, getUser}