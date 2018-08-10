import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Filter from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Filter component', () => {
  const mockProps = {
    options: [{
      id: 1,
      name: 'name',
    }],
    onChange: jest.fn(),
  };

  const component = shallow(<Filter {...mockProps} />);
  const instance = component.instance()

  describe('onChange', () => {
    it('should call onChange', () => {
      instance.onChange({ target: { value: 'test' } })
      expect(instance.props.onChange).toHaveBeenCalledWith('test')
    })
  })
});
