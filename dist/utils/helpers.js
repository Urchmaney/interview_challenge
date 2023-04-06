"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObject = exports.successObject = void 0;
var successObject = function (msg, data) {
    return {
        message: msg,
        data: data
    };
};
exports.successObject = successObject;
var errorObject = function (msg, desc) {
    return {
        message: msg,
        description: desc
    };
};
exports.errorObject = errorObject;
