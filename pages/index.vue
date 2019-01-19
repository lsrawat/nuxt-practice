<template>
  <section class="container">
    <div>
      <user-list></user-list>
    </div>
  </section>
</template>

<script>
import storeService from '~/services/store-service.js';
import http from '~/services/http.js';
import UserList from '~/components/home/user-list/UserList.vue';

export default {
  async fetch({store}) {
    try {
      console.log("data call made");
      console.log(http);
      let { data } = await http.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      storeService.setUsers(data);
    } catch (e) {
      console.log(e);
    }
  },
  
  components: {
    UserList
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 40px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

.btn {
  padding: 6px 12px;
  border-radius: 5px;
  color: #333;
  background-color: #eee;
  border: 1px solid #dedede;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.14);
}
.btn:focus {
  outline: none;
}
.btn:active {
  box-shadow: none;
}
.btn--green {
  background-color: #66bb6a;
}
.btn--blue {
  background-color: #2196f3;
}
</style>

