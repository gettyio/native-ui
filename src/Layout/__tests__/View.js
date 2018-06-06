import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import View from '../View'

describe('View component', () => {
  it('should render without issue', () => {
    const component = shallow(<View />)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
