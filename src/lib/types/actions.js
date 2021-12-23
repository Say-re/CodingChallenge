//@flow

export type HandleInputChange = {
  type: 'HANDLE_INPUT_CHANGE',
  updateValue: any,
  updateField: string
}

export type Action =
  HandleInputChange;