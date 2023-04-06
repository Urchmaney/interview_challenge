"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserWallets = exports.transfer = exports.deposit = exports.withdraw = void 0;
var dbService_1 = require("../services/dbService");
function withdraw(req, res) {
    var amount = req.body.amount;
    var walletId = req.params.walletId;
    (0, dbService_1.withdrawFromWallet)(walletId, amount, function () { res.send('Successfully Withdraw.'); }, function (err) { res.status(400).send('Error while withdraw.'); });
}
exports.withdraw = withdraw;
function deposit(req, res) {
    var amount = req.body.amount;
    var walletId = req.params.walletId;
    (0, dbService_1.depositIntoWallet)(walletId, amount, function () { res.send('Successfully deposited.'); }, function (err) { res.status(400).send('Error while depositing.'); });
}
exports.deposit = deposit;
function transfer(req, res) {
    var amount = req.body.amount;
    var walletId = req.params.walletId;
    var reciepientWalletId = req.body.reciepientWalletId;
    (0, dbService_1.transferToWallet)(walletId, amount, reciepientWalletId, function () { res.send('Successfully transfered.'); }, function (err) { res.status(400).send('Error while transferring.'); });
}
exports.transfer = transfer;
function getUserWallets(req, res) {
    var userId = req.userId || 0;
    (0, dbService_1.userWallets)(userId).then(function (result) {
        res.send(result.map(function (wallet) { return ({ id: wallet.id, currency: wallet.currency }); }));
    });
}
exports.getUserWallets = getUserWallets;
