import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Sort from '../index'

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

describe('<Sort />', () => {
  let component;
  let mockProps;
  let instance;
  let mockState;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      sortOptions: [
        {
          name: 'name',
          id: 1,
        },
      ],
      sortFilm: jest.fn(),
      ...overrides,
    }

    mockState = {
      value: '',
    }
    const store = mockStore(mockState)
    component = shallow(<Sort {...mockProps} store={store} />);
    instance = component.dive().instance();
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('sortBy function', () => {
    it('should return vote_count.asc', () => {
      jest.spyOn(instance, 'sortBy')
      instance.state.value = 'Rating Ascending';
      expect(instance.sortBy()).toEqual('vote_count.asc')
    });

    it('should return vote_count.desc', () => {
      jest.spyOn(instance, 'sortBy')
      instance.state.value = 'Rating Descending';
      expect(instance.sortBy()).toEqual('vote_count.desc')
    });

    it('should return release_date.asc', () => {
      jest.spyOn(instance, 'sortBy')
      instance.state.value = 'Release Date Ascending';
      expect(instance.sortBy()).toEqual('release_date.asc')
    });

    it('should return release_date.desc', () => {
      jest.spyOn(instance, 'sortBy')
      expect(instance.sortBy()).toEqual('release_date.desc')
    });
  })

  describe('handleChange', () => {
    it('should call setState()', () => {
      jest.spyOn(instance, 'handleChange');
      const event = { target: { value: 'test' }, preventDefault: jest.fn() };
      component.dive().find('select').simulate('change', event)
      setTimeout(() => {
        expect(instance.state.value).toEqual('test');
      }, 100)
    })
  })
})
