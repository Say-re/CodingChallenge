export const submitForm = (values) => {
  type: 'SUBMIT_FORM',
    values
}
export const updateFormField = (value, updateField) => ({
  type: 'UPDATE_FORM_FIELD',
  value,
  updateField
})