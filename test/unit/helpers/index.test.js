import { sampleAPI } from '../../../src/helpers/index'
import { defaultState } from '../../../src/reducers/form'
import "isomorphic-fetch";

describe('Tests for helper functions', () => {
  test('sampleAPI Functional Test', async () => {
    const sampleFormData = new Map([
      ['firstName', 'Bobby'],
      ['lastName', 'Heathers']
    ])
    const returnValue = await sampleAPI('https://reqres.in/api/application', sampleFormData)
    const keys = ['id', 'createdAt']
    await expect(Object.keys(returnValue)).toEqual(keys);
  })
})