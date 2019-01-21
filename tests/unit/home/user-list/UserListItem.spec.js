import { mount } from '@vue/test-utils';
import UserListItem from '../../../../components/home/user-list/UserListItem';


describe('UserListItem.vue', () => {
  let wrapper;
  let propsData = {
    user: {
      name: 'mockname1',
      id: 1
    }
  };
  let mocks = {
    $router: {
      push: jest.fn()
    }
  };
  beforeEach(() => {
    wrapper = mount(UserListItem, {
      propsData,
      mocks
    })
  })
  it('method: routeToTodos', (done) => {
    wrapper.vm.routeToTodos();
    console.log(wrapper);
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith(`/user/1/`);
    done();
  })
})