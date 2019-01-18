jest.mock('../../../../services/store-service');
// jest.mock('../../../../mixins/todoFilterMixin');

import { mount, createLocalVue } from '@vue/test-utils';
import TodoList from '@/components/home/todo-list/TodoList';
import Vuex from 'vuex';
import storeService from '../../../../services/store-service';
import todoFilterMixin from '../../../../mixins/todoFilterMixin';


const localVue = createLocalVue();

localVue.use(Vuex);

describe('TodoList.vue', () => {

  let store, wrapper, getters, pending, completed;
  beforeEach(() => {
    getters = {
      todoList: () => [{ completed: true }, { completed: false }, { completed: false }]
    };
    store = new Vuex.Store({
      getters
    });
    wrapper = mount(TodoList, {
      store, localVue
    })
    // console.log(wrapper.vm.listFilterByStatus);
  })
  // it('current id should be set and list should be filtered into pending and completed.', (done) => {
  //   // console.log(wrapper.vm.todoList.length);
  //   // expect(storeService.setCurrentId).toBeCalledWith(3);
  //   // wrapper.vm.listFilterByStatus = jest.fn();
  //   wrapper.
  //   expect(wrapper.vm.listFilterByStatus).toBeCalled();
  //   // expect(wrapper.vm.listFilterByStatus).toBeCalledWith(wrapper.vm.todoList, false);
  //   // expect(wrapper.vm.pending.length).toBe(2);
  //   // expect(wrapper.vm.completed.length).toBe(1);
  //   done();
  // })
  describe('methods', () => {
    it('addTodoToList', (done) => {
      wrapper.vm.addTodoToList({ completed: false });
      expect(storeService.setTodos).toBeCalledWith(wrapper.vm.todoList);
      setTimeout(() => {
        expect(wrapper.vm.pending.length).toBe(3);
      }, 0);
      done();
    });

    it('onMarkAsComplete', (done) => {
      wrapper.vm.onMarkAsComplete(wrapper.vm.todoList[1]);
      setTimeout(() => {
        expect(wrapper.vm.pending.length).toBe(1);
        expect(wrapper.vm.completed.length).toBe(2);
      })
      done();
    })
  })

})