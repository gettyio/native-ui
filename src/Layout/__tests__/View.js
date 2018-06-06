/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import View from '../View'

describe('View component', () => {
  it('should render without issue', () => {
    const component = shallow(<View />)

    expect(component.length).toBe(1)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('has a custom flex style applied', () => {
    const component = shallow(<View flex='1' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('flex-grow', 1)
    expect(toJson(component)).toHaveStyleRule('flex-shrink', 1)
  })

  it('has a custom height styled applied', () => {
    const component = shallow(<View height={100} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('height', 100)
  })

  it('has a custom width styled applied', () => {
    const component = shallow(<View width={100} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('width', 100)
  })

  it('has a custom align-items styled applied', () => {
    const component = shallow(<View align='center' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('align-items', 'center')
  })

  it('has a custom justify-content styled applied', () => {
    const component = shallow(<View justify='center' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('justify-content', 'center')
  })

  it('has a custom background styled applied', () => {
    const component = shallow(<View background='blue' />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('background-color', 'blue')
  })

  it('has a custom margin styled applied', () => {
    const component = shallow(<View m={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-bottom', 10)
    expect(toJson(component)).toHaveStyleRule('margin-top', 10)
    expect(toJson(component)).toHaveStyleRule('margin-left', 10)
    expect(toJson(component)).toHaveStyleRule('margin-right', 10)
  })

  it('has a custom margin-horizontal styled applied', () => {
    const component = shallow(<View mh={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-horizontal', 10)
  })

  it('has a custom margin-vertical styled applied', () => {
    const component = shallow(<View mv={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-vertical', 10)
  })

  it('has a custom margin-left styled applied', () => {
    const component = shallow(<View ml={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-left', 10)
  })

  it('has a custom margin-right styled applied', () => {
    const component = shallow(<View mr={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-right', 10)
  })

  it('has a custom margin-top styled applied', () => {
    const component = shallow(<View mt={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-top', 10)
  })

  it('has a custom margin-bottom styled applied', () => {
    const component = shallow(<View mb={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('margin-bottom', 10)
  })

  it('has a custom padding styled applied', () => {
    const component = shallow(<View p={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-bottom', 10)
    expect(toJson(component)).toHaveStyleRule('padding-top', 10)
    expect(toJson(component)).toHaveStyleRule('padding-left', 10)
    expect(toJson(component)).toHaveStyleRule('padding-right', 10)
  })

  it('has a custom padding-horizontal styled applied', () => {
    const component = shallow(<View ph={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-horizontal', 10)
  })

  it('has a custom padding-vertical styled applied', () => {
    const component = shallow(<View pv={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-vertical', 10)
  })

  it('has a custom padding-left styled applied', () => {
    const component = shallow(<View pl={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-left', 10)
  })

  it('has a custom padding-right styled applied', () => {
    const component = shallow(<View pr={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-right', 10)
  })

  it('has a custom padding-top styled applied', () => {
    const component = shallow(<View pt={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-top', 10)
  })

  it('has a custom padding-bottom styled applied', () => {
    const component = shallow(<View pb={10} />)

    expect(toJson(component)).toMatchSnapshot()
    expect(toJson(component)).toHaveStyleRule('padding-bottom', 10)
  })
})
