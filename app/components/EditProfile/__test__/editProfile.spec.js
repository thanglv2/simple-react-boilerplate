import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import EditProfile from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('EditProfile component', () => {
  const component = shallow(<EditProfile />);

  it('should match to SnapShot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
