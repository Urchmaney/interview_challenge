"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenAuthMiddlewear = void 0;
var tokenService_1 = require("../services/tokenService");
function tokenAuthMiddlewear(req, res, next) {
    var _a;
    if (!req.headers.authorization) {
        res.status(401).send("Unauthorized Request");
        return;
    }
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    var decoded = (0, tokenService_1.decodeAuthToken)(token);
    if (!decoded) {
        res.status(401).send("Unauthorized Request");
        return;
    }
    req.userId = decoded.userId;
    next();
}
exports.tokenAuthMiddlewear = tokenAuthMiddlewear;
