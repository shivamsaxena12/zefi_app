import _ from 'lodash';

export default error => {
  let errors = error;

  switch (true) {
    case _.has(error, 'response.status') === false:
      errors = {
        message:
          'Unable to connect to server. This might be a network issue at your or the server end.',
      };
      break;

    case _.get(error, 'response.status') === 401:
      errors = {
        message: 'Session Has Expired',
        code: 401,
      };

      // LOGOUT USER
      break;

    default:
      errors = _.get(error, 'response.data', error);
      break;
  }

  return errors;
};
