import { mount } from '@vue/test-utils';
import TodoListItemCompleted from '@/components/home/todo-list/TodoListItemCompleted'

describe('TodoListItemCompleted.vue', () => {
  const wrapper = mount(TodoListItemCompleted, {
    propsData: {
      todo: {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    }
  });
  it('contains an li element', () => {
    expect(wrapper.contains('li')).toBe(true)
  })
  it("renders correct markup", () => {
    expect(wrapper.html()).toContain('<li>delectus aut autem</li>')
  })
})
