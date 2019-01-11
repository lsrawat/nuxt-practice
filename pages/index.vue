<template>
  <section class="container">
    <div>
      <todo-list :todos="todos"></todo-list>
    </div>
  </section>
</template>

<script>
import TodoList from '~/components/home/todo-list/TodoList.vue';
import axios from 'axios';

export default {
  async asyncData() {
    try {
      console.log("data call made");
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return { todos: data };
    } catch (e) {
      console.log(e);
    }
  },
  // middleware:{},
  components: {
    TodoList
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 40px;
     
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.btn{
    padding: 6px 12px;
    border-radius: 5px;
    color: #333;
    background-color: #eee;
    border: 1px solid #dedede;
    box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.14);
}
.btn:focus{
  outline: none;
}
.btn:active{
  box-shadow: none;
}
.btn--green{
  background-color: #66BB6A;
}
.btn--blue{
  background-color: #2196f3;
}
</style>

