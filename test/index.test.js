const { describe, it } = require('mocha');
const { expect } = require('chai');

const { get } = require('../index');

describe('get', () => {
  describe('success', () => {
    it('should retrieve the parameter from the request body if present', done => {
      const req = { body: { myParam: 'this is my param' } };
      const param = get(req, 'myParam');
      expect(param).to.equal('this is my param');
      done();
    });

    it('should retrieve the parameter from the request query if present', done => {
      const req = { query: { myParam: 'this is my param' } };
      const param = get(req, 'myParam');
      expect(param).to.equal('this is my param');
      done();
    });

    it('should retrieve the parameter from the request body if both body and query are present', done => {
      const req = { query: { myParam: 'this is my query param' }, body: { myParam: 'this is my body param' } };
      const param = get(req, 'myParam');
      expect(param).to.equal('this is my body param');
      done();
    });
  });

  describe('errors', () => {
    it('should return false if req is null', done => {
      const param = get(null, 'myParam');
      expect(param).to.equal(false);
      done();
    });

    it('should return false if req is undefined', done => {
      const param = get(undefined, 'myParam');
      expect(param).to.equal(false);
      done();
    });

    it('should return false if the param is not present in the query or body', done => {
      const req = { query: { someOtherParam: 'this is my query param' }, body: { someOtherParam: 'this is my body param' } };
      const param = get(req, 'myParam');
      expect(param).to.equal(false);
      done();
    });
  });
});