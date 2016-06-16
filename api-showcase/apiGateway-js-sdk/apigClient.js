/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://services.elemez.com';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.batteryLowGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['from', 'x-api-key', 'token', 'to'], ['body']);
        
        var batteryLowGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/battery/low').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['x-api-key', 'token', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['from', 'to']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(batteryLowGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.batteryLowPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', 'body'], ['body']);
        
        var batteryLowPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/battery/low').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(batteryLowPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.batteryLowOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var batteryLowOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/battery/low').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(batteryLowOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.dataGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['from', 'x-api-key', 'token', 'to'], ['body']);
        
        var dataGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/data').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['x-api-key', 'token', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['from', 'to']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(dataGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.dataPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', 'body'], ['body']);
        
        var dataPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/data').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(dataPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.dataOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var dataOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/data').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(dataOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.disruptionsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['from', 'x-api-key', 'token', 'to'], ['body']);
        
        var disruptionsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/disruptions').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['x-api-key', 'token', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['from', 'to']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(disruptionsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.disruptionsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', 'body'], ['body']);
        
        var disruptionsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/disruptions').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(disruptionsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.disruptionsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var disruptionsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/disruptions').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(disruptionsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.utilizationGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['from', 'token', 'to'], ['body']);
        
        var utilizationGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/utilization').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['token', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['from', 'to']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(utilizationGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.utilizationOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var utilizationOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/utilization').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(utilizationOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.utilizationUsedPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', 'body'], ['body']);
        
        var utilizationUsedPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/utilization/used').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['rid', 'os', 'mac', 'x-api-key', 'token', 'sn', 'scheme', 'id', 'version', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(utilizationUsedPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.utilizationUsedOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var utilizationUsedOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/utilization/used').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(utilizationUsedOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
