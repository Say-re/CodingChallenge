import React from 'react';
import { shallow } from 'enzyme';
import CheckboxComponent from '../../../../../src/components/forms/fields/checkbox'

describe('Checkbox Component Tests', () => {
  test('CheckboxComponent Snapshot Test', () => {
    const wrapper = shallow(<CheckboxComponent />)
    expect(wrapper).toMatchSnapshot()
  })
});