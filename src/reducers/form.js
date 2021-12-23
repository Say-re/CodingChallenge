// @flow

import type { InputStateProps } from "../lib/types/forms";
import type { Action } from "../lib/types/actions";

export const defaultState: InputStateProps = {
  firstName: 'Travis',
  lastName: 'Rose',
  userEmail: 'annonymous@gmail.com',
  userAddress: '123 Candycane Lane',
  userCity: 'North Pole',
  userState: 'Ice Caps',
  userZipcode: '123987',
  userTelephone: '808-029-0394',
  userJob: 'Manager',
  userExperience: 'Less than 1 year',
  userTechnologyExperience: ['css'],
  userShortAnswer: '',
  userTest: 'No',
}


// Any Changes to input fields are dispatched for update immediately within all form fields
const formReducer = (state: InputStateProps = defaultState, action: Action): InputStateProps => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE': {
      let newState = state;
      const { updateValue, updateField } = action
      return {
        ...newState,
        [updateField]: updateValue
      }
    }
    default: {
      return state
    }
  }
}

export default formReducer