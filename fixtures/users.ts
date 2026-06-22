export const users = {
  standard: {
    username: process.env.STANDARD_USER!,
    password: process.env.STANDARD_PASSWORD!,
  },

  locked: {
    username: process.env.LOCKED_USER!,
    password: process.env.STANDARD_PASSWORD!,
  },

  invalid: {
    username: process.env.INVALID_USER!,
    password: process.env.INVALID_PASSWORD!,
  },

  missingUsername: {
    username: '',
    password: process.env.STANDARD_PASSWORD!,
  },

  missingPassword: {
    username: process.env.STANDARD_USER!,
    password: '',
  },

  emptyCredentials: {
    username: '',
    password: '',
  },
};