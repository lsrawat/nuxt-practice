import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INCREMENT_ID = "INCREMENT_ID";
const SET_CURRENT_ID = "SET_CURRENT_ID";
const SET_TODOS_BY_ID = "SET_TODOS_BY_ID";
const SET_USERS = "SET_USERS";

const store = new Vuex.Store({
  state: {
    currentId: 0,
    allTodos: {},
    userList: []
  },
  mutations: {
    [INCREMENT_ID](state) {
      state.currentId += 1;
    },
    [SET_CURRENT_ID](state, currentId) {
      state.currentId = currentId
    },
    [SET_TODOS_BY_ID](state, {todos, id}) {
      console.log(todos);
      console.log(id)
      state.allTodos[id] = todos.slice();
    },
    [SET_USERS](state, users) {
      state.userList = users.slice();
    }
  },
  getters: {
    currentId: state => {
      return state.currentId
    },
    todosById: state => {
      return (userId) => {
        return state.allTodos[userId];
      }
    },
    userList: state => {
      return state.userList;
    },
    allTodos: state => {
      return state.allTodos;
    }
  }
})

export default () => store;
