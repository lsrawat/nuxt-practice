<template>
  <li>{{todo.title}}</li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style scoped>
li {
  text-decoration: line-through;
  color: #666;
}
</style>
