import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const SET_TODOS_BY_ID = "SET_TODOS_BY_ID";
const SET_USERS = "SET_USERS";
const ADD_TODO_BY_USER = "ADD_TODO_BY_USER";

const store = new Vuex.Store({
  state: {
    currentId: 0,
    allTodos: {},
    userList: []
  },
  mutations: {
    [SET_TODOS_BY_ID](state, {todos, id}) {
      // set state for caching purpose. Reduces api calls.
      state.allTodos[id] = todos;
    },
    [SET_USERS](state, users) {
      state.userList = users;
    },
    [ADD_TODO_BY_USER](state, {todo, id}){
      // Change object to get recognised in computed properties.
      state.allTodos = Object.assign({}, state.allTodos);
      state.allTodos[id].unshift(todo);
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
