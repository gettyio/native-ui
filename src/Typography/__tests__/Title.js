/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Title from '../Title'

describe('Title component', () => {
  it('should render without issue', () => {
    const component = shallow(<Title>Title text.</Title>)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have default props', () => {
    const component = shallow(<Title>Title text.</Title>)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('font-weight', 'normal')
    expect(toJson(component)).toHaveStyleRule('font-size', 37)
    expect(toJson(component)).toHaveStyleRule('line-height', 55)
    expect(toJson(component)).toHaveStyleRule('letter-spacing', 0.176)
  })
})
