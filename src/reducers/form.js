// @flow

import type { InputStateProps } from "../lib/types/forms";
import type { Action } from "../lib/types/actions";

export const defaultState: InputStateProps = {
  firstName: 'Travis',
  lastName: 'Rose',
  userEmail: 'annonymous@gmail.com',
  userAddress: '123 Candycane Lane',
  userCity: 'North Pole',
  userState: 'Ice-Caps',
  userZipcode: '123987',
  userTelephone: '808-029-0394',
  userJob: 'Manager',
  userExperience: 'Less than 1 year',
  userTechnologyExperience: ['css'],
  userShortAnswer: '',
  userTest: false,
}



const formReducer = (state: InputStateProps = defaultState, action: Action): InputStateProps => {
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE': {
      let newState = state;
      const { updateValue, updateField } = action
      if (updateField === 'userTechnologyExperience') {
        return {
          ...newState,
          [updateField]: updateValue
        }
      }
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