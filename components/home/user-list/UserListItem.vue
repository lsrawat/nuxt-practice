<template>
  <li>
    <a @click="routeToTodos">{{user.name}}</a>
  </li>
</template>
<script>
export default {
  props:{
    user:{
      type: Object,
      default: () => {}
    }
  },
  methods:{
    routeToTodos() {
      this.$router.push(
        `/user/${this.user.id}/`
      )
    }
  }
}
</script>
<style>

</style>
