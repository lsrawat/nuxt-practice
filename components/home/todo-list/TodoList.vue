<template>
  <div>
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
import api from '../../../services/http.js';

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
    completed: function() {
      return this.listFilterByStatus(this.allTodos[this.userId], true);
    },
    pending: function() {
      console.log("pending called")
      return this.listFilterByStatus(this.allTodos[this.userId], false);
    },
  },
  watch:{
    allTodos:function(newVal, oldVal) {
      console.log('changed');
    }
  },
  props:{
    userId:{
      type: Number,
      default: 0
    }
  },
  methods: {
    /**
     * desc: Add todo to todos list. Will automatically move to pending because of computed.
     * return: none
     * params: {todo: new todo object}
     */
    addTodoToList(todo) {
      // this.pending.unshift(todo);
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

</style>
