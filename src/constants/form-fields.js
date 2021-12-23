// @flow

import type { DefaultFormFields } from "../lib/types/forms";

export const jobs: Array<{ [key: string]: string }> = [
  { title: 'Manager' },
  { title: 'Engineer - Lead' },
  { title: 'Engineer - Mid-level' },
  { title: 'Engineer - Junior' },
  { title: 'Engineer - Front-end Focused' },
  { title: 'Engineer - Backend Focused' },
  { title: 'Engineer - Fullstack' }
];

export const experience: Array<{ [key: string]: string }> = [
  { experience: 'Less than one year' },
  { experience: 'More than 1 year but less than 3' },
  { experience: 'More than 3 years but less than 5' },
  { experience: 'More than 5 years' }
];

export const technologyExperience: Array<{ [key: string]: string }> = [
  { technology: 'Javascript' },
  { technology: 'HTML' },
  { technology: 'CSS' },
  { technology: 'SASS' },
  { technology: 'NodeJS' },
  { technology: 'Java' },
  { technology: 'AWS - Lambda' },
  { technology: 'AWS - IAM' },
  { technology: 'AWS - DynamoDB' },
  { technology: 'S3' },
];

export const defaultFormFields: DefaultFormFields =
{
  topFields: [{
    field: 'firstName',
    type: 'text',
    placeholder: 'Travis',
    label:
    {
      class: 'blck-label',
      text: 'First Name'
    }
  },
  {
    field: 'lastName',
    type: 'text',
    placeholder: 'Rose',
    label:
    {
      class: 'blck-label',
      text: 'Last Name'
    }
  },
  {
    field: 'userEmail',
    type: 'email',
    placeholder: 'Annonymous@gmail.com',
    label:
    {
      class: 'blck-label',
      text: 'Email'
    }
  }
  ],
  addressField: {
    field: 'userAddress',
    type: 'text',
    placeholder: '123 Candycane Lane',
    label:
    {
      class: 'blck-label',
      text: 'Main Address'
    },
  },
  telephoneField: {
    field: 'userTelephone',
    type: 'tel',
    placeholder: '895-023-0595',
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    label: {
      class: 'blck-label',
      text: 'Phone Number'
    }
  },
  secondaryAddressFields: [{
    field: 'userCity',
    type: 'text',
    placeholder: 'Rovaniemi',
    label:
    {
      class: 'blck-label',
      text: 'City'
    }
  },
  {
    field: 'userState',
    type: 'text',
    placeholder: 'North Pole',
    label:
    {
      class: 'blck-label',
      text: 'State'
    }
  },
  {
    field: 'userZipcode',
    type: 'text',
    placeholder: '90845',
    label:
    {
      class: 'blck-label',
      text: 'Zipcode'
    }
  }],
  userExperience: [
    'Less than one year',
    'More than 1 year but less than 3',
    'More than 3 years but less than 5',
    'More than 5 years'
  ]
};
