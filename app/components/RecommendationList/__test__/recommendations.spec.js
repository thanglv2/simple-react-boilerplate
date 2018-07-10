import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import RecommendationList from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<RecommendationList />', () => {
  const mockProps = {
    recommendations: [
      {
        id: 1,
        backdrop_path: 'jkfdjfd',
        title: 'title',
      },
    ],
  }
  const component = shallow(<RecommendationList {...mockProps} />)

  it('should return div tag', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
})

