import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

//Wrapper for block level field components
export const BlockFormFieldsWrapper = styled('div')`
margin: 0.5rem 0 5rem 0;
`
//Wraps text-input fields other than the address field
export const FieldSubWrapper = styled('div')`
width: 30%;

@media screen and (max-width: ${breakpoints.mobile}px) {
  width: 100%;
  flex-wrap: wrap
}
`
//address field wrapper
export const FieldSubWrapper2 = styled('div')`
width: 65%;
  @media screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`
//Wrapper for rows with 3 input fields
export const FieldWrapper = styled('div')` 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0.25rem 0;

@media screen and (max-width: ${breakpoints.mobile}px) {
  flex-direction: column;
  align-items: baseline;
}`
// Main content wrapper
export const MainWrapper = styled('main')` 
max-width: 800px;
width: 90%;
position: relative;
margin: 1rem auto;

@media screen and (max-width: ${breakpoints.mobile}px) {
  width: 75%;
}
  `;
// Format multiselect component styles
export const MultiSelectWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  `
//Wrapper for  ifirst 8 input text fields
export const PartOneWrapper = styled('div')`
width: 100 %;
margin: 0.5rem 0;
padding-bottom: 0.5rem;
border-bottom: 0.1rem solid #274c77;
`
