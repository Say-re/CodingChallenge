import React from 'react';
import { shallow } from 'enzyme';
import TextInputComponent from '../../../../../src/components/forms/fields/textInput';

describe('Text Input Component Tests', () => {
  test('Shallow TextInputComponent Snapshot', async () => {
    const wrapper = shallow(<TextInputComponent />)
    await expect(wrapper).toMatchSnapshot();
  })
})