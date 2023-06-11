"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
var errorHandler = function (err, req, res, next) {
    // console.log('Something went wrong', err);
    // * if the error would be instance of abstract class CustomError it will match this condition
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        message: err.message
    });
};
exports.errorHandler = errorHandler;
