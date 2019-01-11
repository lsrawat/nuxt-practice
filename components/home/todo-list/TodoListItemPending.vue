<template>
  <li>
    <div>
      {{todo.title}}
      <button @click="onMarkAsCompleted()" class="btn btn--blue">Mark as Completed</button>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onMarkAsCompleted() {
      console.log(this.todo);
      this.$emit("mark-as-complete", { todo: this.todo, index: this.index });
    }
  }
};
</script>
<style>
</style>
