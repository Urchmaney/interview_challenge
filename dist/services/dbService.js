"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferToWallet = exports.withdrawFromWallet = exports.depositIntoWallet = exports.registerNewUser = exports.getUserByEmail = exports.userWallets = exports.isUserWalletOwner = void 0;
var constants_1 = require("../utils/constants");
var knex = require('../configs/db/knex');
function createNewUser(user) {
    return knex(constants_1.USER_TABLE).insert(user);
}
function addUserWallet(userId) {
    var wallet = { user_id: userId, currency: constants_1.NGN };
    return knex(constants_1.WALLET_TABLE).insert(wallet);
}
function addWalletTransaction(tranx) {
    return knex(constants_1.WALLET_TRANSACTION_TABLE).insert(tranx);
}
function decrementWalletAmount(walletId, amount) {
    return knex(constants_1.WALLET_TABLE).where('id', '=', walletId).decrement('balance', amount);
}
function incrementWalletAmount(walletId, amount) {
    return knex(constants_1.WALLET_TABLE).where('id', '=', walletId).increment('balance', amount);
}
function isUserWalletOwner(userId, walletId) {
    return knex(constants_1.WALLET_TABLE).whereExists(knex.select('*').from(constants_1.WALLET_TABLE).whereRaw("user_id = ".concat(userId, " && id = ").concat(walletId)));
}
exports.isUserWalletOwner = isUserWalletOwner;
function userWallets(userId) {
    return knex(constants_1.WALLET_TABLE).where('user_id', userId);
}
exports.userWallets = userWallets;
function getUserByEmail(email) {
    return knex(constants_1.USER_TABLE).where('email', email).first();
}
exports.getUserByEmail = getUserByEmail;
function registerNewUser(user, cb, errCb) {
    knex.transaction(function (trx) {
        createNewUser(user).transacting(trx).then(function (ids) {
            return addUserWallet(ids[0]).transacting(trx);
        }).then(trx.commit)
            .catch(trx.rollback);
    }).then(function (_) {
        cb();
    }).catch(function (err) {
        errCb(err);
    });
}
exports.registerNewUser = registerNewUser;
function depositIntoWallet(walletId, amount, cb, errCb) {
    knex.transaction(function (trx) {
        incrementWalletAmount(walletId, amount).transacting(trx).then(function (val) {
            return addWalletTransaction({ wallet_id: walletId, transaction_type: constants_1.DEPOSIT, amount: amount, currency: constants_1.NGN }).transacting(trx);
        }).then(trx.commit)
            .catch(trx.rollback);
    }).then(function (_) {
        cb();
    }).catch(function (err) {
        errCb(err);
    });
}
exports.depositIntoWallet = depositIntoWallet;
function withdrawFromWallet(walletId, amount, cb, errCb) {
    knex.transaction(function (trx) {
        decrementWalletAmount(walletId, amount).transacting(trx).then(function (val) {
            return addWalletTransaction({ wallet_id: walletId, transaction_type: constants_1.WITHDRAW, amount: amount, currency: constants_1.NGN }).transacting(trx);
        }).then(trx.commit)
            .catch(trx.rollback);
    }).then(function (_) {
        cb();
    }).catch(function (err) {
        errCb(err);
    });
}
exports.withdrawFromWallet = withdrawFromWallet;
function transferToWallet(walletId, amount, reciepientWalletId, cb, errCb) {
    knex.transaction(function (trx) {
        decrementWalletAmount(walletId, amount).transacting(trx).then(function (val) {
            return incrementWalletAmount(reciepientWalletId, amount).transacting(trx).then(function (val) {
                return addWalletTransaction({ wallet_id: walletId, transaction_type: constants_1.TRANSFER, amount: amount, currency: constants_1.NGN, recipient_wallet_id: reciepientWalletId }).transacting(trx);
            });
        }).then(trx.commit)
            .catch(trx.rollback);
    }).then(function (_) {
        cb();
    }).catch(function (err) {
        errCb(err);
    });
}
exports.transferToWallet = transferToWallet;
