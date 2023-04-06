"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserWallets = exports.transfer = exports.deposit = exports.withdraw = void 0;
var dbService_1 = require("../services/dbService");
var helpers_1 = require("../utils/helpers");
function withdraw(req, res) {
    var amount = req.body.amount;
    var walletId = req.params.walletId;
    (0, dbService_1.withdrawFromWallet)(walletId, amount, function () { res.status(200).json((0, helpers_1.successObject)('Successfully Withdraw.', { amount: amount })); }, function (err) { res.status(400).json((0, helpers_1.errorObject)('Error while withdraw.', err.message)); });
}
exports.withdraw = withdraw;
function deposit(req, res) {
    var amount = req.body.amount;
    var walletId = req.params.walletId;
    (0, dbService_1.depositIntoWallet)(walletId, amount, function () { res.status(200).json((0, helpers_1.successObject)('Successfully deposited.', { amount: amount.toString() })); }, function (err) { res.status(400).json((0, helpers_1.errorObject)('Error while depositing.', err.message)); });
}
exports.deposit = deposit;
function transfer(req, res) {
    var amount = req.body.amount;
    var walletId = req.params.walletId;
    var reciepientWalletId = req.body.reciepientWalletId;
    (0, dbService_1.transferToWallet)(walletId, amount, reciepientWalletId, function () { res.status(200).json((0, helpers_1.successObject)('Successfully Transfered.', { amount: amount })); }, function (err) { res.status(400).json((0, helpers_1.errorObject)('Error while transferring.', err.message)); });
}
exports.transfer = transfer;
function getUserWallets(req, res) {
    var userId = req.userId || 0;
    (0, dbService_1.userWallets)(userId).then(function (result) {
        res.status(200).json((0, helpers_1.successObject)('user wallets.', { wallets: result.map(function (wallet) { return ({ id: wallet.id, currency: wallet.currency }); }) }));
    });
}
exports.getUserWallets = getUserWallets;
