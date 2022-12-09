# ProCakeRestApi.InfoControllerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClasses**](InfoControllerApi.md#getClasses) | **GET** /info/classes | Fetch all DataClasses
[**getMeasures**](InfoControllerApi.md#getMeasures) | **GET** /info/measures | Fetch all SimilarityMeasures
[**getPools**](InfoControllerApi.md#getPools) | **GET** /info/pools | Fetch all ObjectPools
[**getStatus**](InfoControllerApi.md#getStatus) | **GET** /info/status | Get status of current CAKE-Instance


<a name="getClasses"></a>
# **getClasses**
> getClasses()

Fetch all DataClasses



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.InfoControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getClasses(callback);
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

<a name="getMeasures"></a>
# **getMeasures**
> getMeasures()

Fetch all SimilarityMeasures



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.InfoControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getMeasures(callback);
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

<a name="getPools"></a>
# **getPools**
> getPools()

Fetch all ObjectPools



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.InfoControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPools(callback);
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

<a name="getStatus"></a>
# **getStatus**
> getStatus()

Get status of current CAKE-Instance



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.InfoControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getStatus(callback);
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

