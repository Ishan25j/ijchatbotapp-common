"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatus = void 0;
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["Query"] = "chatbot:query-pending";
    ResponseStatus["Responded"] = "chatbot:responded";
    ResponseStatus["Reported"] = "chatbot:response-reported";
})(ResponseStatus || (exports.ResponseStatus = ResponseStatus = {}));
