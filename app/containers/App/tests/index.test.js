/**
 * Test the App Page
 */

import React from 'react'
import { shallow } from 'enzyme'
import { App, mapDispatchToProps } from '../index'
import Input from 'components/Input'
import { setUsername } from '../actions'

describe('<Learning />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<App />)
    expect(renderedComponent.length).toEqual(1)
  })

  it('should render an Input component', () => {
    const onChangeEvent = jest.fn()
    const renderedComponent = shallow(<App username="test" onChangeUsername={onChangeEvent} />)
    expect(renderedComponent.contains(<Input value="test" onChange={onChangeEvent} />)).toEqual(true)
  })

  it('should render a button', () => {
    const renderedComponent = shallow(<App />)
    expect(renderedComponent.find('button').length).toBe(1)
  })

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onChangeUsername).toBeDefined()
      })

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const username = 'test'
        result.onChangeUsername(username)
        expect(dispatch).toHaveBeenCalledWith(setUsername(username))
      })
    })
  })
})
