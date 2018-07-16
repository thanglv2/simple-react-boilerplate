import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Poster, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Poster />', () => {
  const mockProps = {
    fetchMovie: jest.fn(),
    id: 1,
    movie: {
      item: {
        poster_path: 'poster_path',
        overview: 'this is overview',
      },
    },
  };

  const component = shallow(<Poster {...mockProps} />);
  const instance = component.instance();

  describe('render', () => {
    it('should return a p tag with overview value less than 300 character', () => {
      expect(component.find('p').first().text()).toEqual('this is overview');
    })

    it('should return a p tag with overview value more than 300 character', () => {
      component.setProps({
        movie: {
          item: {
            overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
        },
      })
      expect(component.find('p').first().text()).toEqual("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h...");
    })
  })

  describe('componentDidMount()', () => {
    it('should call fetchMovie', () => {
      jest.spyOn(instance, 'componentDidMount');
      expect(instance.props.fetchMovie).toHaveBeenCalledWith(instance.props.id);
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
