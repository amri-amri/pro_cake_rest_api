# ProCakeRestApi.ConversionControllerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert**](ConversionControllerApi.md#convert) | **PUT** /conversion/{converterID} | Start conversion with specified converter
[**getConverters**](ConversionControllerApi.md#getConverters) | **GET** /conversion/info | Fetch available converters


<a name="convert"></a>
# **convert**
> convert(converterID, opts)

Start conversion with specified converter



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConversionControllerApi();

var converterID = "converterID_example"; // String | 

var opts = { 
  'body': "body_example" // String | Name (ID) of the converted NEST Workflow - Required for BPMNtoNEST Converter
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.convert(converterID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **converterID** | **String**|  | 
 **body** | **String**| Name (ID) of the converted NEST Workflow - Required for BPMNtoNEST Converter | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="getConverters"></a>
# **getConverters**
> getConverters()

Fetch available converters



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConversionControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getConverters(callback);
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

