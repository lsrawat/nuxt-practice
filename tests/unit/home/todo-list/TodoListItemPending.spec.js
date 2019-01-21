import { mount } from '@vue/test-utils';
import TodoListItemPending from '@/components/home/todo-list/TodoListItemPending'

describe('TodoListItemPending.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TodoListItemPending, {
      propsData: {
        todo: {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        }
      }
    });
  })
  it('contains an li element', () => {
    expect(wrapper.contains('li')).toBe(true)
  })
  it("renders correct markup", () => {
    expect(wrapper.html()).toContain(`<li><div>
    delectus aut autem
    <button class=\"btn btn--blue\">Mark as Completed</button></div></li>`)
  })
  it('calls mark as completed on button click', (done) => {
    wrapper.vm.onMarkAsCompleted = jest.fn();
    const markAsCompleteButton = wrapper.find('button');
    markAsCompleteButton.trigger('click');
    expect(wrapper.vm.onMarkAsCompleted).toBeCalled();

    // expect(wrapper.emitted()['mark-as-complete']).toBe(true);
    done()
  })
  it('emits an mark-as-complete of function calling onMarkAsCompleted', (done) => {
    wrapper.vm.onMarkAsCompleted();
    expect(wrapper.emitted()['mark-as-complete'][0].length).toBe(1);
    done();
  })

})
