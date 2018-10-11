import serializeError from '../src';

describe('serializeError', () => {
  it('should throw an error if passed value is not an Error instance', () => {
    try {
      serializeError(null);
    } catch (error) {
      expect(error.message).toEqual('the param \'error\' must be an instance of Error.');
    }
  });

  it('should serialize an Error instance', () => {
    try {
      throw new Error('error message');
    } catch (error) {
      const json = serializeError(error);
      const errObj = JSON.parse(json);

      expect(errObj.name).toEqual('Error');
      expect(errObj.message).toEqual('error message');
      expect(typeof (errObj.stack)).toEqual('string');
    }
  });
});
