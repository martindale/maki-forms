var assert = require('assert');

describe('Maki.forms', function() {
  describe('lib', function() {
    it('should expose a middleware', function() {
      var lib = require('../');
      
      assert.equal( typeof( lib ) , 'function' );
    });
  });
});
