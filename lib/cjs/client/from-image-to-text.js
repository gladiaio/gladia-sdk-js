"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromImageToText = void 0;
var tslib_1 = require("tslib");
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromImageToText = /** @class */ (function () {
    function FromImageToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromImageToText.prototype.classification = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        formData.append('top_k', String(args.top_k));
        return this.httpClient.post({
            url: '/image/text/classification/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData,
        });
    };
    FromImageToText.prototype.ocr = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        formData.append('source_language', args.source_language);
        return this.httpClient.post({
            url: '/image/text/ocr/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_TEXT_OCR_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData,
        });
    };
    return FromImageToText;
}());
exports.FromImageToText = FromImageToText;
