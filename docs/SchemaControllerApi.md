# ProCakeRestApi.SchemaControllerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSchema**](SchemaControllerApi.md#getSchema) | **GET** /schema/{schemaID} | Fetch specific schema-file
[**getSchemata**](SchemaControllerApi.md#getSchemata) | **GET** /schema/info | Fetch all schema-file names


<a name="getSchema"></a>
# **getSchema**
> getSchema(schemaID)

Fetch specific schema-file

One of the following roles is required to access thi resource: ADMIN, DEVELOPER

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.SchemaControllerApi();

var schemaID = "schemaID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSchema(schemaID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schemaID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="getSchemata"></a>
# **getSchemata**
> getSchemata()

Fetch all schema-file names

One of the following roles is required to access thi resource: ADMIN, DEVELOPER

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.SchemaControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSchemata(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

