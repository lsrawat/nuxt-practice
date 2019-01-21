<template>
  <div class="todo-list">
    <add-todo @add-todo="addTodoToList($event)" :todoId="todoId"></add-todo>
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
  data() {
    return{
      todoId: 0
    }
  },
  mixins: [todoFilterMixin],
  computed: {
    ...mapGetters(['allTodos']),
    /**
     * return: the pending and completed when the state of allTodos mutates. 
     */
    completed: function() {
      return this.listFilterByStatus(this.allTodos[this.userId], true);
    },
    pending: function() {
      return this.listFilterByStatus(this.allTodos[this.userId], false);
    },
  },
  props:{
    userId:{
      type: Number,
      default: 0
    }
  },
  methods: {
    /**
     * desc: Add todo to todos list. Will automatically move to pending because of computed property.
     * return: none
     * params: {todo: new todo object}
     */
    addTodoToList(todo) {
      storeService.addTodoByUser(todo, this.userId);
      this.todoId++;
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
  .todo-list{
    width:100%;
  }
</style>
