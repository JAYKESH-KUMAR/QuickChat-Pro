export function clearAuth() {
  try {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  } catch (e) {
    // ignore storage errors
  }
}

export default { clearAuth }
