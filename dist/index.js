"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = require("./routes/auth");
var transaction_1 = require("./routes/transaction");
var bodyParser = require("body-parser");
var knex = require('./configs/db/knex');
var app = (0, express_1.default)();
app.use(bodyParser.json());
var port = 3000;
app.use('/api/auth', auth_1.authRouter);
app.use('/api/transactions', transaction_1.transactionRouter);
knex.migrate.latest().then(function () {
    console.log("Migration Successed");
}).catch(function (err) {
    console.log('Error Migrating DB =====', err);
});
app.listen(port, function () {
    console.log("TypeScript with Express\n         http://localhost:".concat(port, "/"));
});
