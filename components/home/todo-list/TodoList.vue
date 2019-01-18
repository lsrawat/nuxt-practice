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
import todoFilterMixin from "@/mixins/todoFilterMixin.js";
import { mapGetters } from "vuex";
import storeService from "../../../services/store-service.js";

export default {
  components: {
    TodoListItemCompleted,
    TodoListItemPending,
    AddTodo
  },
  mixins: [todoFilterMixin],
  computed: {
    ...mapGetters(["todoList"]),
    completed: function() {
      return this.listFilterByStatus(this.todoList, true);
    },
    pending: function() {
      return this.listFilterByStatus(this.todoList, false);
    }
  },
  /**
   * desc: Set current id in store for mantaining key in v-for.
   * return: none
   * params: none
   */
  mounted() {
    storeService.setCurrentId(this.todoList.length);
  },
  methods: {
    /**
     * desc: Add todo to todos list. Will automatically move to pending because of computed.
     * return: none
     * params: {todo: new todo object}
     */
    addTodoToList(todo) {
      this.todoList.unshift(todo);
      storeService.setTodos(this.todoList);
    },
    /**
     * desc: mark todo as completed. Computed will automatically filter the list.
     * return: none
     * params: {todo: todo object from pending list}
     */
    onMarkAsComplete(todo) {
      todo.completed = true;
    }
  }
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
