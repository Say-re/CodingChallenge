import React from 'react';
import { shallow } from 'enzyme';
import TextInputComponent from '../../../../../src/components/forms/fields/textInput';

describe('Text Input Component Tests', () => {
  test('Shallow TextInputComponent Snapshot', () => {
    const wrapper = shallow(<TextInputComponent />)
    expect(wrapper).toMatchSnapshot();
  })
})