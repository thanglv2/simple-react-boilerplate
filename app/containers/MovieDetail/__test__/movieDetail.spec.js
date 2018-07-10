import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MovieDetail, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<MovieDetail />', () => {
  let instance;
  let component;
  let mockProps;

  const setUpComponent = (overrides = {}) => {
    mockProps = {
      movie: {
        item: {
          poster_path: 'http',
        },
      },
      fetchMovie: jest.fn(),
      match: {
        params: {
          id: 1,
        },
      },
      history: {
        push: jest.fn(),
      },
      ...overrides,
    }

    component = shallow(<MovieDetail {...mockProps} />)
    instance = component.instance()
  }

  beforeEach(() => {
    setUpComponent();
  });

  describe('componentDidMount()', () => {
    it('should call fetchMovie', () => {
      jest.spyOn(instance, 'componentDidMount');
      expect(instance.props.fetchMovie).toHaveBeenCalledWith(instance.props.match.params.id);
    })
  })

  describe('redirectHome', () => {
    it('should redirect to home page', () => {
      instance.redirectHome()
      expect(instance.props.history.push).toHaveBeenCalledWith('/');
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object', () => {
      const state = {
        movieDetail: {},
      }
      const expectedResult = {
        movie: state.movieDetail,
      };

      expect(mapStateToProps(state)).toEqual(expectedResult);
    })
  })
})
