/*
 * ProCAKE Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProCakeRestApi);
  }
}(this, function(expect, ProCakeRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SMStringNGramModel', function() {
      beforeEach(function() {
        instance = new ProCakeRestApi.SMStringNGramModel();
      });

      it('should create an instance of SMStringNGramModel', function() {
        // TODO: update the code to test SMStringNGramModel
        expect(instance).to.be.a(ProCakeRestApi.SMStringNGramModel);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property dataClass (base name: "dataClass")', function() {
        // TODO: update the code to test the property dataClass
        expect(instance).to.have.property('dataClass');
        // expect(instance.dataClass).to.be(expectedValueLiteral);
      });

      it('should have the property caseSensitive (base name: "caseSensitive")', function() {
        // TODO: update the code to test the property caseSensitive
        expect(instance).to.have.property('caseSensitive');
        // expect(instance.caseSensitive).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

    });
  });

}));
