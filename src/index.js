import isError from '@propellerheads/is-error';

const nameProperty = 'name';

function serializeError(error) {
  if (!isError(error)) {
    throw new Error('the param \'error\' must be an instance of Error.');
  }

  const plainObject = {};

  Object.getOwnPropertyNames(error).forEach((key) => {
    plainObject[key] = error[key];
  });

  if (nameProperty in error) {
    plainObject[nameProperty] = error[nameProperty];
  }

  return JSON.stringify(plainObject);
}

export default serializeError;
