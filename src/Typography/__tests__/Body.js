/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Body from '../Body'

describe('Body component', () => {
  it('should render without issue', () => {
    const component = shallow(<Body>Body text.</Body>)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have default props', () => {
    const component = shallow(<Body>Body text.</Body>)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('font-weight', 'normal')
    expect(toJson(component)).toHaveStyleRule('font-size', 23)
    expect(toJson(component)).toHaveStyleRule('line-height', 29)
    expect(toJson(component)).toHaveStyleRule('letter-spacing', -0.384)
  })
})
