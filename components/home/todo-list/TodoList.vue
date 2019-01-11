<template>
  <div>
    <add-todo @add-todo="addTodoToList($event)"></add-todo>
    <h1>Pending</h1>
    <ul>
      <todo-list-item-pending
        v-for="(todo, index) in pending"
        :key="todo.id"
        :todo="todo"
        :index="index"
        @mark-as-complete="onMarkAsComplete"
      ></todo-list-item-pending>
    </ul>
    <h1>Completed</h1>
    <ul>
      <todo-list-item-completed v-for="todo in completed" :key="todo.id" :todo="todo"></todo-list-item-completed>
    </ul>
  </div>
</template>
<script>
import TodoListItemCompleted from "@/components/home/todo-list/TodoListItemCompleted.vue";
import TodoListItemPending from "@/components/home/todo-list/TodoListItemPending.vue";
import AddTodo from "@/components/home/AddTodo.vue";
import axios from "axios";
import todoFilterMixin from "@/mixins/todoFilterMixin.js";

export default {
  components: {
    TodoListItemCompleted,
    TodoListItemPending,
    AddTodo
  },
  mixins: [todoFilterMixin],
  data: function() {
    return {
      completed: [],
      pending: []
    };
  },
  props: {
    todos: Array
  },
  /**
   * desc: Set current id in store and seperate the pending and completed lists.
   * return: none
   * params: none
   */
  mounted() {
    this.$store.dispatch('setCurrentId', this.todos.length);
    this.completed = this.filterCompletionStatus(this.todos, true);
    this.pending = this.filterCompletionStatus(this.todos, false);
  },
  methods: {
    /**
     * desc: Add todo to pending todos list.
     * return: none
     * params: {todo: new todo object}
     */
    addTodoToList(todo) {
      this.pending.push(todo);
    },
    /**
     * desc: Remove todo from pending list and add to completed list.
     * Need to store this in store/ make this persistent using services
     * return: none
     * params: {todo: todo object from pending list}
     */
    onMarkAsComplete({todo, index}) {
      todo.completed = true;
      this.pending.splice(index, 1);
      this.completed.push(todo);
    }
  },
};
</script>
<style>
ul {
  padding-left: 0;
}
li {
  list-style: none;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin-top: 2px;
  padding: 8px 10px;
}
</style>
