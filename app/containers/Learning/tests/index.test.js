/**
 * Test the Learning Page
 */

import React from 'react'
import { shallow } from 'enzyme'
import { Learning, mapDispatchToProps } from '../index'
import { setKeyword } from '../actions'
import { documents } from '../constants'

describe('<Learning />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<Learning username="" keyword="" />)
    expect(renderedComponent.length).toEqual(1)
  })

  it('should render anonymous person text if username not exists', () => {
    const renderedComponent = shallow(<Learning username="" keyword="" />)
    expect(renderedComponent.text()).toContain('anonymous person')
  })

  it('should render exact username if it exists', () => {
    const renderedComponent = shallow(<Learning username="test" keyword="" />)
    expect(renderedComponent.text()).not.toContain('anonymous person')
    expect(renderedComponent.text()).toContain('test')
  })

  it('should show documents link if keyword is valid', () => {
    const validKeywords = ['react', 'redux', 'react-router', 'webpack']
    validKeywords.map((item) => {
      const renderedComponent = shallow(<Learning keyword={item} />)
      expect(renderedComponent.contains(<a href={documents[item.toLowerCase()]} target="_blank" >Read documents</a>)).toEqual(true)
    })
  })

  it('should not show documents link if keyword is invalid', () => {
    const invalidKeywords = ['', 'test', 'invalid']
    invalidKeywords.map((item) => {
      const renderedComponent = shallow(<Learning keyword={item} />)
      expect(renderedComponent.find('a').length).toBe(0)
    })
  })

  describe('mapDispatchToProps', () => {
    describe('setKeyword', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onChangeKeyword).toBeDefined()
      })

      it('should dispatch setKeyword when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const keyword = 'test'
        result.onChangeKeyword(keyword)
        expect(dispatch).toHaveBeenCalledWith(setKeyword(keyword))
      })
    })
  })
})
