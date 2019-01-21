<template>
  <section class="user-list">
    <user-list-item v-for="(user, index) in userList" :key="user.id" :user="user" :index="index"></user-list-item>
  </section>
</template>
<script>
import UserListItem from "~/components/home/user-list/UserListItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    UserListItem
  },
  computed: {
    ...mapGetters(['userList']),
  }
};
</script>
<style scoped>
  .user-list{
    display: block;
    
  }
</style>
