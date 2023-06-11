import { Stan } from "node-nats-streaming";
import { Events } from "./events";
interface Event {
    subject: Events;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    protected client: Stan;
    constructor(client: Stan);
    publish(data: T['data']): Promise<void>;
}
export {};
