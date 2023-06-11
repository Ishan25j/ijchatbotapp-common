import { Events } from "./events";
import { Status } from "./types/status-type";

export interface ChatbotQuery {
    subject: Events.ChatbotQuery;
    data: {
        userId: string;
        textId: string;
        text: string;
    }
}