"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer = exports.deposit = exports.withdraw = void 0;
var dbService_1 = require("../services/dbService");
function withdraw(req, res) {
    var userId = req.userId || 0;
    var amount = req.body.amount;
    var walletId = req.body.wallet_id;
    (0, dbService_1.withdrawFromWallet)(walletId, amount, function () { res.send('Successfully Withdraw.'); }, function (err) { res.status(400).send('Error while withdraw.'); });
}
exports.withdraw = withdraw;
function deposit(req, res) {
    var userId = req.userId || 0;
    var amount = req.body.amount;
    var walletId = req.body.wallet_id;
    (0, dbService_1.depositIntoWallet)(walletId, amount, function () { res.send('Successfully deposited.'); }, function (err) { res.status(400).send('Error while depositing.'); });
}
exports.deposit = deposit;
function transfer(req, res) {
    var userId = req.userId || 0;
    var amount = req.body.amount;
    var walletId = req.body.wallet_id;
    var reciepientWalletId = req.body.reciepient_wallet_id;
    (0, dbService_1.transferToWallet)(walletId, amount, reciepientWalletId, function () { res.send('Successfully transfered.'); }, function (err) { res.status(400).send('Error while transferring.'); });
}
exports.transfer = transfer;
