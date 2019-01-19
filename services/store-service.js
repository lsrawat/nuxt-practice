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

export default {
  setTodosById,
  setCurrentId,
  incrementId,
  setUsers
};