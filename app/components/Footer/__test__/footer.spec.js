import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Footer from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {
  const component = shallow(<Footer />);

  it('should match to SnapShot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
