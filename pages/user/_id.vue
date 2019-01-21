<template>
  <div class="container">
    <todo-list :userId="userId"></todo-list>
  </div>
</template>
<script>
import TodoList from "~/components/home/todo-list/TodoList.vue";
import { mapGetters } from "vuex";
import api from '~/services/http.js';
import storeService from '~/services/store-service.js';

export default {
  computed: {
    ...mapGetters(["allTodos"]),
    userId() {
      return Number(this.$route.params.id);
    }
  },
  async fetch({store, params}) {
    console.log(store.state.allTodos);
    const id = params.id;
    // Fetch only if data not fetched previously.
    if (!store.state.allTodos.hasOwnProperty(String(id))) {
       const { data } = await api.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      storeService.setTodosById({todos:data, id});
    }
  },
  components: {
    TodoList
  }
};
</script>
<style scoped>
</style>
