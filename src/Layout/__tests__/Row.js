/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Row from '../Row'
import View from '../View'

describe('Row component', () => {
  it('should render without issue', () => {
    const component = shallow(<Row><View /></Row>)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have default props', () => {
    const component = shallow(<Row><View /></Row>)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('flex-direction', 'row')
  })
})
