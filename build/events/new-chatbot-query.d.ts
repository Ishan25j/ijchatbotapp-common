import { Events } from "./events";
import { ResponseStatus } from "./types/reponse-status";
export interface ChatbotQuery {
    subject: Events.ChatbotQuery;
    data: {
        userId: string;
        textId: string;
        text: string;
        status: ResponseStatus.Query;
    };
}
