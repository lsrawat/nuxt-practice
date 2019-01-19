export default {
  methods: {
    listFilterByStatus(list, status) {
      return list.filter(item => item.completed === status);
    }
  }
}