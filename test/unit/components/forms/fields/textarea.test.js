import React from 'react';
import { shallow } from 'enzyme';
import TextAreaComponent from '../../../../../src/components/forms/fields/textarea'

describe('Textarea Component tests', () => {
  test('Shallow TextareComponent Snapshot', () => {
    const wrapper = shallow(<TextAreaComponent />)
    expect(wrapper).toMatchSnapshot();
  })
})
