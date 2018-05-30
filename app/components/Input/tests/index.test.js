import React from 'react'
import { shallow } from 'enzyme'

import Input from '../index'

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = shallow(<Input />)
    expect(renderedComponent.find('input').length).toBe(1)
  })

  it('should render an <input> tag with correct attribute', () => {
    const onChangeEvent = jest.fn()
    const event = {
      target: { value: 'test' },
    }
    const renderedComponent = shallow(<Input value="test" onChange={onChangeEvent} />)
    renderedComponent.find('input').simulate('change', event)
    expect(onChangeEvent).toBeCalledWith('test')
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Input attribute="test" />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
