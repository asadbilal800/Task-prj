import {User} from "@progress/kendo-angular-conversational-ui";

export const USER: User = {
  id: 1,
};

export const REGISTER_FORM_CONFIG = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      label: 'username',
      placeholder: 'Enter username',
      required: true,
    },
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'email',
      placeholder: 'Enter email',
      required: true,
    },
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'password',
      type: 'password',
      placeholder: 'Enter password',
      required: true,
    },
  },
];

export const LOGIN_FORM_CONFIG = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      label: 'email',
      placeholder: 'Enter email',
      required: true,

    },
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'password',
      type: 'password',
      placeholder: 'Enter password',
      required: true,
    },
  },
];
