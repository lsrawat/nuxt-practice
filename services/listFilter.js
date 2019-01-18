export default function (list, status) {
  return list.filter(item => item.completed === status);
}