"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeAuthToken = exports.generateAuthToken = void 0;
var constants_1 = require("../utils/constants");
var jwt = require('jsonwebtoken');
function generateAuthToken(payload) {
    return jwt.sign(payload, constants_1.APP_SECRET);
}
exports.generateAuthToken = generateAuthToken;
function decodeAuthToken(token) {
    return jwt.verify(token, constants_1.APP_SECRET);
}
exports.decodeAuthToken = decodeAuthToken;
