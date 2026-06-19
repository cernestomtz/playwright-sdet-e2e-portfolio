export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },

  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },

  invalid: {
    username: 'invalid_user',
    password: 'invalid_password',
  },

  missingUsername: {
    username: '',
    password: 'secret_sauce',
  },

  missingPassword: {
    username: 'standard_user',
    password: '',
  },

  emptyCredentials: {
    username: '',
    password: '',
  },
};