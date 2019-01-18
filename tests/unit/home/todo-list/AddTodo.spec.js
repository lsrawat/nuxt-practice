import { createLocalVue, mount } from '@vue/test-utils';
import AddTodo from '@/components/home/AddTodo';
import Vuex from 'vuex';
import storeService from '../../../../services/store-service';

const localVue = createLocalVue();

localVue.use(Vuex);
describe('TodoList.vue', () => {
  const wrapper = mount(AddTodo);
  beforeEach(() => {
    
  })
  it('should contain a button and an input', () => {
    expect(wrapper.contains("button")).toBe(true);
    expect(wrapper.contains("input")).toBe(true);
  })
  it('should emit a todo object on button click', () => {
    const button = wrapper.find('button');
    button.trigger('click');
    wrapper.vm.$emit('add-todo', wrapper.vm.todo);
    expect(wrapper.emitted()['add-todo'][0]).toEqual([wrapper.vm.todo]);
  })
  it('should have default todo values', () => {
    expect(wrapper.vm.todo).toEqual({
      id: 0,
      title: "",
      userId: 0,
      completed: false
    });
  })
})
