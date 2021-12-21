import React from 'react';
import { shallow } from 'enzyme';
import MultiSelectComponent from '../../../../../src/components/forms/fields/multiSelect'

describe('Multiselect Component Tests', () => {
  test('MultiSelectComponent Snapshot Test', () => {
    const wrapper = shallow(<MultiSelectComponent />)
    expect(wrapper).toMatchSnapshot();
  })
})
