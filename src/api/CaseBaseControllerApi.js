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
    root.ProCakeRestApi.CaseBaseControllerApi = factory(root.ProCakeRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * CaseBaseController service.
   * @module api/CaseBaseControllerApi
   * @version 1.0.4
   */

  /**
   * Constructs a new CaseBaseControllerApi. 
   * @alias module:api/CaseBaseControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCaseBase operation.
     * @callback module:api/CaseBaseControllerApi~addCaseBaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add/replace CaseBase cbID
     * 
     * @param {String} cbid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/CaseBaseControllerApi~addCaseBaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCaseBase = function(cbid, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cbid' is set
      if (cbid === undefined || cbid === null) {
        throw new Error("Missing the required parameter 'cbid' when calling addCaseBase");
      }


      var pathParams = {
        'cbid': cbid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/xml'];
      var accepts = ['application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cases/{cbid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addCaseToCaseBase operation.
     * @callback module:api/CaseBaseControllerApi~addCaseToCaseBaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add/replace Case cID to/in CaseBase cbID
     * 
     * @param {String} cbid 
     * @param {String} cid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/CaseBaseControllerApi~addCaseToCaseBaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCaseToCaseBase = function(cbid, cid, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'cbid' is set
      if (cbid === undefined || cbid === null) {
        throw new Error("Missing the required parameter 'cbid' when calling addCaseToCaseBase");
      }

      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling addCaseToCaseBase");
      }


      var pathParams = {
        'cbid': cbid,
        'cid': cid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/xml'];
      var accepts = ['application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cases/{cbid}/{cid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCaseBase operation.
     * @callback module:api/CaseBaseControllerApi~getCaseBaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch CaseBase cbID
     * 
     * @param {String} cbid 
     * @param {module:api/CaseBaseControllerApi~getCaseBaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCaseBase = function(cbid, callback) {
      var postBody = null;

      // verify the required parameter 'cbid' is set
      if (cbid === undefined || cbid === null) {
        throw new Error("Missing the required parameter 'cbid' when calling getCaseBase");
      }


      var pathParams = {
        'cbid': cbid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cases/{cbid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCaseFromCaseBase operation.
     * @callback module:api/CaseBaseControllerApi~getCaseFromCaseBaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch Case cID from CaseBase cbID
     * 
     * @param {String} cbid 
     * @param {String} cid 
     * @param {module:api/CaseBaseControllerApi~getCaseFromCaseBaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCaseFromCaseBase = function(cbid, cid, callback) {
      var postBody = null;

      // verify the required parameter 'cbid' is set
      if (cbid === undefined || cbid === null) {
        throw new Error("Missing the required parameter 'cbid' when calling getCaseFromCaseBase");
      }

      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling getCaseFromCaseBase");
      }


      var pathParams = {
        'cbid': cbid,
        'cid': cid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cases/{cbid}/{cid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeCaseBase operation.
     * @callback module:api/CaseBaseControllerApi~removeCaseBaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove CaseBase cbID
     * 
     * @param {String} cbid 
     * @param {module:api/CaseBaseControllerApi~removeCaseBaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeCaseBase = function(cbid, callback) {
      var postBody = null;

      // verify the required parameter 'cbid' is set
      if (cbid === undefined || cbid === null) {
        throw new Error("Missing the required parameter 'cbid' when calling removeCaseBase");
      }


      var pathParams = {
        'cbid': cbid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cases/{cbid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeCaseFromCaseBase operation.
     * @callback module:api/CaseBaseControllerApi~removeCaseFromCaseBaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove case CID from caseBase CBID
     * 
     * @param {String} cbid 
     * @param {String} cid 
     * @param {module:api/CaseBaseControllerApi~removeCaseFromCaseBaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeCaseFromCaseBase = function(cbid, cid, callback) {
      var postBody = null;

      // verify the required parameter 'cbid' is set
      if (cbid === undefined || cbid === null) {
        throw new Error("Missing the required parameter 'cbid' when calling removeCaseFromCaseBase");
      }

      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling removeCaseFromCaseBase");
      }


      var pathParams = {
        'cbid': cbid,
        'cid': cid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cases/{cbid}/{cid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
