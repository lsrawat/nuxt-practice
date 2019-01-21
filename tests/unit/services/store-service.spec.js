import Store from '../../../store/index';
import storeService from '../../../services/store-service';

const store = Store();

describe('store-service.js', () => {
  let todos, id, users;
  beforeEach(() => {
    todos = [{ completed: true }, { completed: false }];
    id = 1;
    users = [{name: 'mockName1'}, {name:'mockName2'}]
  })
  it('method: setTodosById should add a new key to object allTodos with value of array passed.', (done) => {
    storeService.setTodosById({todos, id});
    expect(store.state.allTodos[1].length).toBe(2);
    done();
  })
  it('method: setUsers should set users', (done) => {
    storeService.setUsers(users);
    expect(store.state.userList.length).toBe(2);
    done();
  })

  it('method: addTodoByUser should add todo to the respective user', (done) => {
    let newTodo = {completed: false};
    let prevAllTodos = store.state.allTodos;
    storeService.addTodoByUser(newTodo, id);
    let newAllTodos = store.state.allTodos;
    expect(prevAllTodos !== newAllTodos).toBe(true);
    expect(store.state.allTodos[1].length).toBe(3);
    expect(store.state.allTodos[1][0] === newTodo).toBe(true);
    done();
  })
})