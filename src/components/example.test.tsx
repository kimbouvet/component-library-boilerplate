import * as React from "react";
import ExampleComponent from '.';

import { shallow } from 'enzyme'

describe('ExampleComponent', () => {
  it('renders', () => {
    const wrapper = shallow(<ExampleComponent />)
    expect(wrapper.find('h1').html()).toMatch(/Example component!/)
  })

  it('renders snapshots, too', () => {
    const wrapper = shallow(<ExampleComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})