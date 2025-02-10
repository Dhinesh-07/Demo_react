const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));
const getUser = () => JSON.parse(localStorage.getItem('user')) || null;
const clearUser = () => localStorage.removeItem('user');

export default { setUser, getUser, clearUser };
