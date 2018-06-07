/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Content from '../Content'
import View from '../View'

describe('Content component', () => {
  it('should render without issue', () => {
    const component = shallow(<Content><View /></Content>)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have default props', () => {
    const component = shallow(<Content><View /></Content>)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-top', 16)
    expect(toJson(component)).toHaveStyleRule('padding-bottom', 16)
    expect(toJson(component)).toHaveStyleRule('padding-left', 16)
    expect(toJson(component)).toHaveStyleRule('padding-right', 16)
  })
})
