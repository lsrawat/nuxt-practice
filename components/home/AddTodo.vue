<template>
  <div class="input-container">
    <input type="text" v-model="todo.title">
    <button @click="addTodo()" class="btn btn--green">Add Todo</button>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import storeService from '../../services/store-service.js';

/**
 * desc: returns initalizing data for a new todo
 * return: Object for todo type
 * params: none
 */
const initTodo = function() {
  return {
    id: 0,
    title: "",
    userId: 0,
    completed: false
  };
};

export default {
  data() {
    return {
      todo: initTodo()
    };
  },
  computed: {
    ...mapGetters(['currentId'])
  },
  methods: {
    /**
     * desc: Create new todo. Emit an event for adding to the list containiing the component. Initalize the id.
     * return: none
     * params: none
     */
    addTodo() {
      // if (this.todo.title.trim() !== "") {
        // for mantaining the ids in todolist.
        storeService.incrementId();
        this.todo.id = this.currentId;
        this.$emit("add-todo", this.todo);
        this.todo = initTodo();
      // }
    }
  }
};
</script>
<style scoped>
.input-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  align-items: center;
}
input {
  width: 50%;
  align-self: center;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 8px 5px;
  margin: 5px;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.14);
}
</style>
