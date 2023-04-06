"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = void 0;
var express_1 = require("express");
var walletController_1 = require("../controllers/walletController");
var authMiddlewear_1 = require("../middlewears/authMiddlewear");
exports.walletRouter = (0, express_1.Router)();
exports.walletRouter.use(authMiddlewear_1.tokenAuthMiddlewear);
exports.walletRouter.get('/');
exports.walletRouter.post(':walletId/withdraw', walletController_1.withdraw);
exports.walletRouter.post(':walletId/deposit', walletController_1.deposit);
exports.walletRouter.post(':walletId/transfer', walletController_1.transfer);
