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

  let store, wrapper, getters, pending, completed, propsData;
  beforeEach(() => {
    getters = {
      allTodos: () => {
        return {
          1: [{ completed: true }, { completed: false }],
          3: [{ completed: true }, { completed: false }, { completed: false }],
          5: [{ completed: true }, { completed: false }, { completed: true }],
        }
      }
    };
    store = new Vuex.Store({
      getters
    });
    propsData = {
      userId: 3
    }
    wrapper = mount(TodoList, {
      store, localVue, propsData
    })
    console.log(wrapper);
    // console.log(wrapper.vm.listFilterByStatus);
  })
  describe('methods', () => {
    it('addTodoToList', (done) => {
      let dummyTodo = { completed: false };
      wrapper.vm.addTodoToList(dummyTodo);
      expect(storeService.addTodoByUser).toBeCalledWith(dummyTodo, 3);
      setTimeout(() => {
        expect(wrapper.vm.pending.length).toBe(3);
      }, 0);
      done();
    });

    it('onMarkAsComplete', (done) => {
      wrapper.vm.onMarkAsComplete(wrapper.vm.pending[0]);
      setTimeout(() => {
        expect(wrapper.vm.pending.length).toBe(1);
        expect(wrapper.vm.completed.length).toBe(1);
      })
      done();
    })

    it('computed pending to be of length 1', (done) => {
      expect(wrapper.vm.pending.length).toBe(2);
      done();
    })

    it('computed completed to be of lenght 1', (done) => {
      expect(wrapper.vm.completed.length).toBe(1);
      done();
    })
  })

})