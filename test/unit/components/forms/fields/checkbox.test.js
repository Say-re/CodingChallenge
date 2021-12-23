import React from 'react';
import { shallow } from 'enzyme';
import CheckboxComponent from '../../../../../src/components/forms/fields/checkbox'

describe('Checkbox Component Tests', () => {
  test('CheckboxComponent Snapshot Test', async () => {
    const wrapper = shallow(<CheckboxComponent />)
    await expect(wrapper).toMatchSnapshot()
  })
});