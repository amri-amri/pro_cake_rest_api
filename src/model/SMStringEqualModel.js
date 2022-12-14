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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProCakeRestApi) {
      root.ProCakeRestApi = {};
    }
    root.ProCakeRestApi.SMStringEqualModel = factory(root.ProCakeRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SMStringEqualModel model module.
   * @module model/SMStringEqualModel
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>SMStringEqualModel</code>.
   * @alias module:model/SMStringEqualModel
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SMStringEqualModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMStringEqualModel} obj Optional instance to populate.
   * @return {module:model/SMStringEqualModel} The populated <code>SMStringEqualModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('dataClass'))
        obj.dataClass = ApiClient.convertToType(data['dataClass'], 'String');
      if (data.hasOwnProperty('caseSensitive'))
        obj.caseSensitive = ApiClient.convertToType(data['caseSensitive'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} dataClass
   */
  exports.prototype.dataClass = undefined;

  /**
   * @member {Boolean} caseSensitive
   */
  exports.prototype.caseSensitive = undefined;


  return exports;

}));
