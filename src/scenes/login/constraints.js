export const constraints = {
  emailAddress: {
    presence: {
      allowEmpty: false,
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Password is too short',
    },
  },
};

export default constraints;
