//@flow


export type TopFormField = {
  field: string,
  type: string,
  placeholder: string,
  label: {
    [key: string]: string
  }
}

export type SelectOptionProps = {
  onHandleInputChange: (updateValue: any, updateField: string) => void,
  userJob: string
}

export type TextInputProps = {
  type: string,
  id: string,
  name: string,
  placeholder: string,
  pattern: string | null,
  onHandleInputChange: (updateValue: any, updateField: string) => void
}

export type SecondaryAddressField = {
  field: string,
  type: string,
  placeholder: string,
  label: {
    [key: string]: string
  }
}

export type DefaultFormFields = {
  topFields: Array<{
    field: string,
    type: string,
    placeholder: string,
    label: {
      [key: string]: string
    }
  }>,
  addressField: {
    field: string,
    type: string,
    placeholder: string,
    label: {
      [key: string]: string
    }
  },
  telephoneField: {
    field: string,
    type: string,
    placeholder: string,
    patter: string,
    label: {
      [key: string]: string
    }
  },
  secondaryAddressFields: Array<{
    field: string,
    type: string,
    placeholder: string,
    label: {
      [key: string]: string
    }
  }>,
  userExperience: Array<string>
}


export type InputStateProps = {
  firstName: string,
  lastName: string,
  userEmail: string,
  userAddress: string,
  userCity: string,
  userState: string,
  userZipcode: string,
  userTelephone: string,
  userJob: string,
  userExperience: string,
  userTechnologyExperience: Array<string>,
  userShortAnswer: string,
  userTest: string,
}
export type InputProps = InputStateProps & {
  onHandleInputChange: (updateValue: any, updateField: string) => void;
}

export type SingleProp = {
  onHandleInputChange: (updateValue: any, updateField: string) => void;
}