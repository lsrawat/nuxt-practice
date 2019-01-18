import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INCREMENT_ID = "INCREMENT_ID";
const SET_CURRENT_ID = "SET_CURRENT_ID";
const SET_TODOS = "SET_TODOS";

const store = new Vuex.Store({
  state: {
    currentId: 0,
    todoList: []
  },
  mutations: {
    [INCREMENT_ID](state) {
      state.currentId += 1;
    },
    [SET_CURRENT_ID](state, currentId) {
      state.currentId = currentId
    },
    [SET_TODOS](state, todos) {
      state.todoList = todos.slice();
    },
  },
  getters: {
    currentId: state => {
      return state.currentId
    },
    todoList: state => {
      return state.todoList
    }
  }
})

export default () => store;
