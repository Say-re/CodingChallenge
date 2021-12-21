import formReducer, { defaultState } from '../../../src/reducers/form';

describe('Form Reducer Test', () => {
  test('Match Snapshot', (done) => {
    expect(defaultState).toMatchSnapshot()
    done();
  });
  test('UPDATE_FORM_FIELD', (done) => {
    const responseState = formReducer(defaultState, {
      type: 'UPDATE_FORM_FIELD',
      updateValue: 'Bob',
      updateField: 'firstName'
    })
    expect(responseState.firstName).toEqual('Bob');
    done()
  });
})