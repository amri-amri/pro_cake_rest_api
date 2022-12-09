# ProCakeRestApi.ConfigurationControllerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDataClass**](ConfigurationControllerApi.md#addDataClass) | **PUT** /configuration/dataclass | Create new DataClass
[**deleteDataClass**](ConfigurationControllerApi.md#deleteDataClass) | **DELETE** /configuration/dataclass/{className} | Delete DataClass
[**deleteMeasure**](ConfigurationControllerApi.md#deleteMeasure) | **DELETE** /configuration/similarityMeasure/{measureName}/{dataClass} | Delete SimilarityMeasure
[**sMStringEqual**](ConfigurationControllerApi.md#sMStringEqual) | **PUT** /configuration/similarityMeasure/StringEqual | Create new StringEqual SimilarityMeasure
[**sMStringLevenshtein**](ConfigurationControllerApi.md#sMStringLevenshtein) | **PUT** /configuration/similarityMeasure/StringLevenshtein | Create new StringLevenshtein SimilarityMeasure
[**sMStringNGram**](ConfigurationControllerApi.md#sMStringNGram) | **PUT** /configuration/similarityMeasure/StringNGram | Create new StringNGram SimilarityMeasure


<a name="addDataClass"></a>
# **addDataClass**
> addDataClass(opts)

Create new DataClass

One of the following roles is required to access thi resource: ADMIN

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConfigurationControllerApi();

var opts = { 
  'body': new ProCakeRestApi.DataClassModel() // DataClassModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addDataClass(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DataClassModel**](DataClassModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="deleteDataClass"></a>
# **deleteDataClass**
> deleteDataClass(className)

Delete DataClass

One of the following roles is required to access thi resource: ADMIN

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConfigurationControllerApi();

var className = "className_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDataClass(className, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **className** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="deleteMeasure"></a>
# **deleteMeasure**
> deleteMeasure(measureName, dataClass)

Delete SimilarityMeasure

One of the following roles is required to access thi resource: ADMIN

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConfigurationControllerApi();

var measureName = "measureName_example"; // String | 

var dataClass = "dataClass_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMeasure(measureName, dataClass, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measureName** | **String**|  | 
 **dataClass** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="sMStringEqual"></a>
# **sMStringEqual**
> sMStringEqual(opts)

Create new StringEqual SimilarityMeasure

One of the following roles is required to access thi resource: ADMIN

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConfigurationControllerApi();

var opts = { 
  'body': new ProCakeRestApi.SMStringEqualModel() // SMStringEqualModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sMStringEqual(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SMStringEqualModel**](SMStringEqualModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="sMStringLevenshtein"></a>
# **sMStringLevenshtein**
> sMStringLevenshtein(opts)

Create new StringLevenshtein SimilarityMeasure

One of the following roles is required to access thi resource: ADMIN

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConfigurationControllerApi();

var opts = { 
  'body': new ProCakeRestApi.SMStringLevenshteinModel() // SMStringLevenshteinModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sMStringLevenshtein(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SMStringLevenshteinModel**](SMStringLevenshteinModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="sMStringNGram"></a>
# **sMStringNGram**
> sMStringNGram(opts)

Create new StringNGram SimilarityMeasure

One of the following roles is required to access thi resource: ADMIN

### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.ConfigurationControllerApi();

var opts = { 
  'body': new ProCakeRestApi.SMStringNGramModel() // SMStringNGramModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sMStringNGram(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SMStringNGramModel**](SMStringNGramModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

