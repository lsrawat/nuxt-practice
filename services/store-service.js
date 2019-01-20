import Store from '../store/index';

const store = Store();

function setTodosById ({todos, id}) {
  store.commit("SET_TODOS_BY_ID", {todos, id});
};
function setCurrentId(id) {
  store.commit('SET_CURRENT_ID', id)
};
function incrementId() {
  store.commit('INCREMENT_ID');
};
function setUsers(users) {
  store.commit('SET_USERS', users)
}
function addTodoByUser(todo, id) {
  store.commit('ADD_TODO_BY_USER', {todo, id})
}
export default {
  setTodosById,
  setCurrentId,
  incrementId,
  setUsers,
  addTodoByUser
};