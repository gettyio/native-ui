/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Text from '../Text'

describe('Text component', () => {
  it('should render without issue', () => {
    const component = shallow(<Text />)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should have custom font with font prop', () => {
    const component = shallow(<Text font='serif' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('font-family', 'serif')
  })

  it('should have custom fontSize with size prop', () => {
    const component = shallow(<Text size={20} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('font-size', 20)
  })

  it('should have custom fontWeight with weight prop', () => {
    const component = shallow(<Text weight='900' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('font-weight', '900')
  })

  it('should have custom lineHeight with leading prop', () => {
    const component = shallow(<Text leading={30} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('line-height', 30)
  })

  it('should have custom letterSpacing with tracking prop', () => {
    const component = shallow(<Text tracking={1} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('letter-spacing', 1)
  })

  it('should have custom color with color prop', () => {
    const component = shallow(<Text color='blue' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('color', 'blue')
  })
})
