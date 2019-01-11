import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from '@/components/home/todo-list/TodoList';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);
describe('getters in todolist.vue', () => {

})
describe('TodoList.vue', () => {

  let store, wrapper;
  beforeEach(() => {
    store = {
      dispatch: jest.fn()
    };
    wrapper = shallowMount(TodoList, {
      propsData: {
        todos: [{ completed: true }, { completed: false }, { completed: false }]
      },
      store,
      localVue
    }).vm
  })
  it('current id should be set', (done) => {
    expect(store.dispatch).toBeCalledWith('setCurrentId', 3);
    expect(wrapper.pending.length).toBe(2);
    expect(wrapper.completed.length).toBe(1);
    done();
  })
  describe('methods', () => {
    it('addTodoToList', (done) => {
      wrapper.addTodoToList({ completed: false });
      expect(wrapper.pending.length).toBe(3);
      done();
    });

    it('onMarkAsComplete', (done) => {
      wrapper.onMarkAsComplete({ todo: { completed: false }, index: 1 });
      expect(wrapper.pending.length).toBe(1);
      expect(wrapper.completed.length).toBe(2);
      done()
    })
  })

})