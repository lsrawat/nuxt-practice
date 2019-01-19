<template>
  <section>
    <user-list-item v-for="(user, index) in users" :key="user.id" :user="user" :index="index"></user-list-item>
    <!-- <li>{{userList}}</li> -->
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
    users:function() {
      return this.userList
    }
  }
};
</script>
