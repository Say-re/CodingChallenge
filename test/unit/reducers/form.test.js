import formReducer, { defaultState } from '../../../src/reducers/form';

describe('Form Reducer Test', () => {
  test('Match Snapshot', async () => {
    await expect(defaultState).toMatchSnapshot()
  });
  test('HANDLE_INPUT_CHANGE', async () => {
    const responseState = formReducer(defaultState, {
      type: 'HANDLE_INPUT_CHANGE',
      updateValue: 'Bob',
      updateField: 'firstName'
    })
    await expect(responseState.firstName).toEqual('Bob');
  });
})