"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOutputModelTypeOneSample = exports.getOutputModelTypeMultipleSamples = exports.getOutputModelType = exports.getInputEnumParamValues = exports.getInputEnumParamType = exports.getInputModelType = exports.getModelValuesName = exports.getModelTypeName = exports.getMethodName = exports.getContentTypeName = exports.getEndpointsByInputOutput = exports.getEndpoints = void 0;
var get_endpoints_1 = require("./get-endpoints");
Object.defineProperty(exports, "getEndpoints", { enumerable: true, get: function () { return get_endpoints_1.getEndpoints; } });
Object.defineProperty(exports, "getEndpointsByInputOutput", { enumerable: true, get: function () { return get_endpoints_1.getEndpointsByInputOutput; } });
var get_content_type_name_1 = require("./get-content-type-name");
Object.defineProperty(exports, "getContentTypeName", { enumerable: true, get: function () { return get_content_type_name_1.getContentTypeName; } });
var get_method_name_1 = require("./get-method-name");
Object.defineProperty(exports, "getMethodName", { enumerable: true, get: function () { return get_method_name_1.getMethodName; } });
var get_model_type_name_1 = require("./get-model-type-name");
Object.defineProperty(exports, "getModelTypeName", { enumerable: true, get: function () { return get_model_type_name_1.getModelTypeName; } });
var get_model_values_name_1 = require("./get-model-values-name");
Object.defineProperty(exports, "getModelValuesName", { enumerable: true, get: function () { return get_model_values_name_1.getModelValuesName; } });
var get_input_model_type_1 = require("./get-input-model-type");
Object.defineProperty(exports, "getInputModelType", { enumerable: true, get: function () { return get_input_model_type_1.getInputModelType; } });
var get_input_enum_param_type_1 = require("./get-input-enum-param-type");
Object.defineProperty(exports, "getInputEnumParamType", { enumerable: true, get: function () { return get_input_enum_param_type_1.getInputEnumParamType; } });
var get_input_enum_param_values_1 = require("./get-input-enum-param-values");
Object.defineProperty(exports, "getInputEnumParamValues", { enumerable: true, get: function () { return get_input_enum_param_values_1.getInputEnumParamValues; } });
var get_output_model_type_1 = require("./get-output-model-type");
Object.defineProperty(exports, "getOutputModelType", { enumerable: true, get: function () { return get_output_model_type_1.getOutputModelType; } });
Object.defineProperty(exports, "getOutputModelTypeMultipleSamples", { enumerable: true, get: function () { return get_output_model_type_1.getOutputModelTypeMultipleSamples; } });
Object.defineProperty(exports, "getOutputModelTypeOneSample", { enumerable: true, get: function () { return get_output_model_type_1.getOutputModelTypeOneSample; } });
