export default {
  methods: {
    filterCompletionStatus: function (list, status) {
      return list.filter(item => item.completed === status);
    }
  }
}