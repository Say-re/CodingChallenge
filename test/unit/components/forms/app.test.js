import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../../../src/components/app'

describe('App Component Unit Tests', () => {
  test('AppComponent Snapshot Test', async () => {
    const wrapper = shallow(<App />)
    await expect(wrapper).toMatchSnapshot();
  })
})