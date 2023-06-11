"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
var Listener = /** @class */ (function () {
    function Listener(client) {
        this.ackWait = 5 * 1000;
        this.client = client;
    }
    /*
    * - options which are chained and added to the 3rd argument in stan.subscribe method
    * - setManualAckMode will listen for success process if error occur then it will
    *   acknowledge and will send data again
    * - setDeliverAllAvailable will return all the event occur till now as an event
    * - setDurableName make sure of event that has been process are not send again when
    *   the service went down and restart and only sends the events which are missed
    */
    Listener.prototype.subscriptionOptions = function () {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    };
    Listener.prototype.listen = function () {
        var _this = this;
        // * adding subscription and also adding queue groups two prevent multiple data retrivals
        var subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription.on('message', function (msg) {
            console.log("Message received: ".concat(_this.subject, " / ").concat(_this.queueGroupName));
            var parseData = _this.parseMessage(msg);
            _this.onMessage(parseData, msg);
        });
    };
    Listener.prototype.parseMessage = function (msg) {
        var data = msg.getData();
        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'));
    };
    return Listener;
}());
exports.Listener = Listener;
