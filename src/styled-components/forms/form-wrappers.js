import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';


export const AddressWrapper = styled('div')` 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const BottomFieldWrapper = styled('div')` 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const FieldSubWrapper = styled('div')`
width: 30%;
`

export const FieldSubWrapper2 = styled('div')`
width: 65%;
  align-self: baseline;
`

export const FieldWrapper = styled('div')` 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

@media screen and (max-width: ${breakpoints.mobile}px) {
  flex-direction: row-reverse;
  display: inline-flex;
  align-items: baseline;
}`



export const BlockFormFieldsWrapper = styled('div')`
margin: 0.5rem 0;
`

export const MainWrapper = styled('div')` 
max-width: 800px;
width: 90%;
position: relative;
margin: 1rem auto;
`;

export const PartOneWrapper = styled('div')`
width: 100%;
margin: 0.5rem 0;
`

export const TopFieldWrapper = styled('div')` 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

@media screen and (max-width: ${breakpoints.mobile}px) {
  flex-wrap: wrap
}`