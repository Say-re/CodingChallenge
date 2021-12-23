import React from 'react';
import { shallow } from 'enzyme';
import MultiSelectComponent from '../../../../../src/components/forms/fields/multiSelect'

describe('Multiselect Component Tests', () => {
  test('MultiSelectComponent Snapshot Test', async () => {
    const wrapper = shallow(<MultiSelectComponent />)
    await expect(wrapper).toMatchSnapshot();
  })
})
