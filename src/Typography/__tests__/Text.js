import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'

import Text from '../Text'

describe('Text component', () => {
  it('should render without issue', () => {
    const component = shallow(<Text />)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })
})
