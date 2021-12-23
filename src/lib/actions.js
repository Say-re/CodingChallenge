//@flow

import type { HandleInputChange } from "./types/actions"


export const handleInputChange = (updateValue: any, updateField: string): HandleInputChange => ({
  type: 'HANDLE_INPUT_CHANGE',
  updateValue,
  updateField
})

