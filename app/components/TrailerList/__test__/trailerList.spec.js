import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TrailerList from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<TrailerList />', () => {
  const mockProps = {
    trailers: [
      {
        key: 'key',
      },
    ],
  }
  const component = shallow(<TrailerList {...mockProps} />)

  it('should return div tag', () => {
    expect(toJson(component)).toMatchSnapshot();
  })
})
