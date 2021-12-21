export const defaultState = {
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
  userShortAnswer: '',
  userTest: 'true'
}


const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM': {
      const newState = state;
      let { firstName, lastName, userEmail, userAddress } = action.values
      return {
        ...newState,
        values: {
          ...newState.values,
          firstName: firstName,
          lastName: lastName,
          userEmail: userEmail,
          userAddress: userAddress
        }
      }
    }
    case 'UPDATE_FORM_FIELD': {
      const newState = state;
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