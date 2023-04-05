"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
var tokenService_1 = require("../services/tokenService");
var dbService_1 = require("../services/dbService");
function register(req, res) {
    (0, dbService_1.registerNewUser)(req.body, function () { res.send('Successfully created a users.'); }, function (err) { res.status(400).send(err.sqlMessage); });
}
exports.register = register;
function login(req, res) {
    (0, dbService_1.getUserByEmail)(req.body.email).then(function (result) {
        if (result && result.password === req.body.password) {
            res.send((0, tokenService_1.generateAuthToken)({ userId: result.id }));
            return;
        }
        res.status(400).send("Wrong credentials.");
    });
}
exports.login = login;
