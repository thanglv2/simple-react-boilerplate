import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import MovieList from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<MovieList />', () => {
  const mockProps = {
    movies: [
      {
        id: 1,
        poster_path: 'jkfdjfd',
      },
    ],
  }
  const component = shallow(<MovieList {...mockProps} />)

  it('should return div tag', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
})
