/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Container from '../Container'
import View from '../View'

describe('Container component', () => {
  it('should render without issue', () => {
    const component = shallow(<Container><View /></Container>)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have default props', () => {
    const component = shallow(<Container><View /></Container>)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('flex-grow', 1)
    expect(toJson(component)).toHaveStyleRule('flex-shrink', 1)
  })
})
