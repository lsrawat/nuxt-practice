export default {
  methods: {
    listFilterByStatus(list, status) {
      console.log(list);
      return list.filter(item => item.completed === status);
    }
  }
}