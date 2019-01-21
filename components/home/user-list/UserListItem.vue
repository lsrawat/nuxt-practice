<template>
  <li>
    <a @click="routeToTodos"><h3>{{user.name}}</h3></a>
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
<style scoped>

</style>
