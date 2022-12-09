# ProCakeRestApi.RetrievalControllerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRetrievers**](RetrievalControllerApi.md#getRetrievers) | **GET** /retrieval/info | Fetch all available retrievers
[**retrieve**](RetrievalControllerApi.md#retrieve) | **PUT** /retrieval/{retrieverID}/{cbid} | Perform retrieval with retriever retrieverID in CaseBase cbID
[**retrieveTextual**](RetrievalControllerApi.md#retrieveTextual) | **PUT** /retrieval/textual/{retrieverID}/{cbid} | Perform retrieval with retriever retrieverID in CaseBase cbID


<a name="getRetrievers"></a>
# **getRetrievers**
> getRetrievers()

Fetch all available retrievers



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.RetrievalControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getRetrievers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="retrieve"></a>
# **retrieve**
> retrieve(retrieverID, cbid, opts)

Perform retrieval with retriever retrieverID in CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.RetrievalControllerApi();

var retrieverID = "retrieverID_example"; // String | 

var cbid = "cbid_example"; // String | 

var opts = { 
  'addQueryToResults': true, // Boolean | 
  'setSorting': true, // Boolean | 
  'setTaskSize': 56, // Number | 
  'body': "body_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.retrieve(retrieverID, cbid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **retrieverID** | **String**|  | 
 **cbid** | **String**|  | 
 **addQueryToResults** | **Boolean**|  | [optional] 
 **setSorting** | **Boolean**|  | [optional] 
 **setTaskSize** | **Number**|  | [optional] 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

<a name="retrieveTextual"></a>
# **retrieveTextual**
> retrieveTextual(retrieverID, cbid, opts)

Perform retrieval with retriever retrieverID in CaseBase cbID



### Example
```javascript
var ProCakeRestApi = require('pro_cake_rest_api');
var defaultClient = ProCakeRestApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new ProCakeRestApi.RetrievalControllerApi();

var retrieverID = "retrieverID_example"; // String | 

var cbid = "cbid_example"; // String | 

var opts = { 
  'numberOfResults': 56, // Number | Number of results to be retrieved (every retriever)
  'setSorting': true, // Boolean | Sorts the elements based on their complexity before retrieval (ParallelLinearRetriever only)
  'setTaskSize': 56, // Number | Amount of cases each worker extracts from the caseBase (ParallelLinearRetriever only)
  'body': "body_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.retrieveTextual(retrieverID, cbid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **retrieverID** | **String**|  | 
 **cbid** | **String**|  | 
 **numberOfResults** | **Number**| Number of results to be retrieved (every retriever) | [optional] 
 **setSorting** | **Boolean**| Sorts the elements based on their complexity before retrieval (ParallelLinearRetriever only) | [optional] 
 **setTaskSize** | **Number**| Amount of cases each worker extracts from the caseBase (ParallelLinearRetriever only) | [optional] 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

