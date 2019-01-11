import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INCREMENT_ID = "INCREMENT_ID";
const SET_CURRENT_ID = "SET_CURRENT_ID"

export default () => new Vuex.Store({
  state: {
    currentId: 0
  },
  mutations: {
    [INCREMENT_ID](state) {
      state.currentId += 1;
    },
    [SET_CURRENT_ID](state, currentId) {
      state.currentId = currentId
    }
  },
  getters: {
    currentId: state => {
      return state.currentId
    }
  },
  actions: {
    setCurrentId({commit}, value) {
      commit('SET_CURRENT_ID', value)
    }
  }
})