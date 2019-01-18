import Store from '../store/index';

const localStore = Store();

function setTodos (todos) {
  localStore.commit("SET_TODOS", todos);
};
function setCurrentId(id) {
  localStore.commit('SET_CURRENT_ID', id)
}
function incrementId() {
  localStore.commit('INCREMENT_ID');
}

export default {
  setTodos,
  setCurrentId,
  incrementId
};