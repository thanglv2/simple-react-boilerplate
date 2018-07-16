import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ButtonLanguage } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<ButtonLanguage />', () => {
  const mockProps = { setLanguage: jest.fn() }
  const component = mount(<ButtonLanguage {...mockProps} />)

  it('should call setLanguage with en', () => {
    component.find('button').at(0).simulate('click')
    expect(mockProps.setLanguage).toHaveBeenCalledWith('en')
  })

  it('should call setLanguage with vi', () => {
    component.find('button').at(1).simulate('click')
    expect(mockProps.setLanguage).toHaveBeenCalledWith('vi')
  })
})
