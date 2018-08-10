import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Loading from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('EmptyList component', () => {
  const component = shallow(<Loading />);

  it('should ...', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
