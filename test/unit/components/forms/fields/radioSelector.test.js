import React from 'react';
import { shallow } from 'enzyme';
import RadioSelectorComponent from '../../../../../src/components/forms/fields/radioSelector';

describe('Radio Selection Component Tests', () => {
  test('RadioSelectorComponent Match Snapshot Test', () => {
    const wrapper = shallow(<RadioSelectorComponent />)
    expect(wrapper).toMatchSnapshot();
  })
})