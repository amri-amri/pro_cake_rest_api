# ProCakeRestApi.CaseBaseControllerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCaseBase**](CaseBaseControllerApi.md#addCaseBase) | **PUT** /cases/{cbid} | Add/replace CaseBase cbID
[**addCaseToCaseBase**](CaseBaseControllerApi.md#addCaseToCaseBase) | **PUT** /cases/{cbid}/{cid} | Add/replace Case cID to/in CaseBase cbID
[**getCaseBase**](CaseBaseControllerApi.md#getCaseBase) | **GET** /cases/{cbid} | Fetch CaseBase cbID
[**getCaseFromCaseBase**](CaseBaseControllerApi.md#getCaseFromCaseBase) | **GET** /cases/{cbid}/{cid} | Fetch Case cID from CaseBase cbID
[**removeCaseBase**](CaseBaseControllerApi.md#removeCaseBase) | **DELETE** /cases/{cbid} | Remove CaseBase cbID
[**removeCaseFromCaseBase**](CaseBaseControllerApi.md#removeCaseFromCaseBase) | **DELETE** /cases/{cbid}/{cid} | Remove case CID from caseBase CBID


<a name="addCaseBase"></a>
# **addCaseBase**
> addCaseBase(cbid, opts)

Add/replace CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.CaseBaseControllerApi();

var cbid = "cbid_example"; // String | 

var opts = { 
  'body': "body_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCaseBase(cbid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cbid** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="addCaseToCaseBase"></a>
# **addCaseToCaseBase**
> addCaseToCaseBase(cbid, cid, opts)

Add/replace Case cID to/in CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.CaseBaseControllerApi();

var cbid = "cbid_example"; // String | 

var cid = "cid_example"; // String | 

var opts = { 
  'body': "body_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCaseToCaseBase(cbid, cid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cbid** | **String**|  | 
 **cid** | **String**|  | 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="getCaseBase"></a>
# **getCaseBase**
> getCaseBase(cbid)

Fetch CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.CaseBaseControllerApi();

var cbid = "cbid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCaseBase(cbid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cbid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="getCaseFromCaseBase"></a>
# **getCaseFromCaseBase**
> getCaseFromCaseBase(cbid, cid)

Fetch Case cID from CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.CaseBaseControllerApi();

var cbid = "cbid_example"; // String | 

var cid = "cid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCaseFromCaseBase(cbid, cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cbid** | **String**|  | 
 **cid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="removeCaseBase"></a>
# **removeCaseBase**
> removeCaseBase(cbid)

Remove CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.CaseBaseControllerApi();

var cbid = "cbid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeCaseBase(cbid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cbid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="removeCaseFromCaseBase"></a>
# **removeCaseFromCaseBase**
> removeCaseFromCaseBase(cbid, cid)

Remove case CID from caseBase CBID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.CaseBaseControllerApi();

var cbid = "cbid_example"; // String | 

var cid = "cid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeCaseFromCaseBase(cbid, cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cbid** | **String**|  | 
 **cid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

