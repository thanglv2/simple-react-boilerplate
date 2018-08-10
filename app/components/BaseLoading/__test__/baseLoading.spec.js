import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import BaseLoading from '../index';
import { toBuffer } from 'ip';

Enzyme.configure({ adapter: new Adapter() });

describe('BaseLoading component', () => {
  it('should match to SnapShot', () => {
    const component = shallow(<BaseLoading />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render <Loading />', () => {
    const mockProps = {
      loading: true,
      children: null,
    }
    const component = mount(<BaseLoading {...mockProps} />)
    expect(component.find('div iframe').length).toBe(1);
  })
});
