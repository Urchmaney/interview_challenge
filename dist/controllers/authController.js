"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
var tokenService_1 = require("../services/tokenService");
var dbService_1 = require("../services/dbService");
var helpers_1 = require("../utils/helpers");
function register(req, res) {
    (0, dbService_1.registerNewUser)(req.body, function () { res.status(201).json((0, helpers_1.successObject)('Successfully created a users.', { name: '' })); }, function (err) { res.status(400).json((0, helpers_1.errorObject)("Error Registering.", err.sqlMessage)); });
}
exports.register = register;
function login(req, res) {
    (0, dbService_1.getUserByEmail)(req.body.email).then(function (result) {
        if (result && result.password === req.body.password) {
            res.status(200).send((0, helpers_1.successObject)("Successfully Logged in.", { token: (0, tokenService_1.generateAuthToken)({ userId: result.id }) }));
            return;
        }
        res.status(400).json((0, helpers_1.errorObject)("Error Logging In.", "Invalid credentials."));
    });
}
exports.login = login;
