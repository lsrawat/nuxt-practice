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

  it('model changed on user input to correct value', (done) => {
    wrapper.vm.addTodo = jest.fn();
    wrapper.vm.todo = { title: '' };
    wrapper.find('input').setValue('dummyTodo');
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.addTodo).toBeCalled();
    expect(wrapper.vm.todo.title === 'dummyTodo').toBe(true);
    done();
  })
  
  it('method: addTodo should emit add-todo when called', (done) => {
    wrapper.vm.addTodo();
    expect(wrapper.emitted()['add-todo'][0].length).toBe(1);
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
