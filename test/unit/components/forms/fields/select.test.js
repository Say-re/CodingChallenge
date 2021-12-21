import React from 'react';
import { shallow } from 'enzyme';
import SelectOptionComponent from '../../../../../src/components/forms/fields/select';


describe('Select Option Component Tests', () => {
  test('SelectOptionComponent Snapshot', () => {
    const wrapper = shallow(<SelectOptionComponent />)
    expect(wrapper).toMatchSnapshot();
  })
})