"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpClient = void 0;
var axios_1 = __importDefault(require("axios"));
var axios_fetch_adapter_1 = require("./axios-fetch-adapter");
var sdk_version_1 = require("../meta/sdk-version");
function getHttpClient(params) {
    var _a, _b, _c;
    var factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
    var baseHeaders = {
        'x-gladia-key': params.apiKey,
        'x-gladia-sdk': sdk_version_1.SDK_VERSION,
        'Content-Type': 'multipart/form-data',
    };
    return factory({
        baseHeaders: baseHeaders,
        baseUrl: (_b = params.baseUrl) !== null && _b !== void 0 ? _b : 'https://v2-api.gladia.io',
        useFetch: (_c = params.useFetch) !== null && _c !== void 0 ? _c : false,
    });
}
exports.getHttpClient = getHttpClient;
var AxiosHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl, useFetch = _a.useFetch;
    return {
        post: function (params) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var headers, url, _i, _c, _d, key, value, responseType, adapter, _e;
                var _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            headers = __assign(__assign({}, baseHeaders), params.headers);
                            url = new URL(params.url, baseUrl);
                            for (_i = 0, _c = Object.entries((_a = params.query) !== null && _a !== void 0 ? _a : {}); _i < _c.length; _i++) {
                                _d = _c[_i], key = _d[0], value = _d[1];
                                url.searchParams.set(key, String(value));
                            }
                            responseType = (_b = params.responseType) !== null && _b !== void 0 ? _b : 'json';
                            if (!useFetch) return [3 /*break*/, 2];
                            _f = {};
                            return [4 /*yield*/, (0, axios_fetch_adapter_1.axiosFetchAdapter)()];
                        case 1:
                            _e = (_f.adapter = _g.sent(), _f);
                            return [3 /*break*/, 3];
                        case 2:
                            _e = {};
                            _g.label = 3;
                        case 3:
                            adapter = _e;
                            return [2 /*return*/, axios_1.default
                                    .post(url.toString(), params.body, __assign({ headers: headers, responseType: responseType }, adapter))
                                    .then(function (response) { return response.data; })];
                    }
                });
            });
        },
    };
};