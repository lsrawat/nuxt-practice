<template>
  <section class="container">
      <user-list></user-list>
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

</style>

