"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletOwnerMiddlewear = void 0;
var dbService_1 = require("../services/dbService");
function walletOwnerMiddlewear(req, res, next) {
    var userId = req.userId || 0;
    var walletId = req.params.walletId;
    (0, dbService_1.isUserWalletOwner)(userId, walletId).then(function (result) {
        if (result.length <= 0) {
            res.status(401).send("Unauthorized Request");
            return;
        }
        next();
    });
}
exports.walletOwnerMiddlewear = walletOwnerMiddlewear;
