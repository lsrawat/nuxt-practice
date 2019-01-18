jest.mock('../../../../services/store-service');

import { createLocalVue, mount } from '@vue/test-utils';
import AddTodo from '@/components/home/AddTodo';
import Vuex from 'vuex';
import storeService from '../../../../services/store-service';

const localVue = createLocalVue();
localVue.use(Vuex);
describe('AddTodo.vue', () => {
  let store;
  let getters;
  let wrapper;
  beforeEach(() => {
    getters = {
      currentId: () => 0
    };
    store = new Vuex.Store({
      getters
    });
    wrapper = mount(AddTodo, { store, localVue });
  })
  it('should contain a button and an input', (done) => {
    expect(wrapper.contains("button")).toBe(true);
    expect(wrapper.contains("input")).toBe(true);
    done();
  })

  it('should emit a todo object on button click and increment id.', (done) => {
    const button = wrapper.find('button');
    button.trigger('click');
    expect(storeService.incrementId).toBeCalled();
    expect(wrapper.vm.currentId).toEqual(wrapper.vm.todo.id);
    wrapper.vm.$emit('add-todo', wrapper.vm.todo);
    expect(wrapper.emitted()['add-todo'][0]).toEqual([wrapper.vm.todo]);
    done();
  })

  it('should have default todo values', (done) => {
    expect(wrapper.vm.todo).toEqual({
      id: 0,
      title: "",
      userId: 0,
      completed: false
    });
    done();
  })
})
