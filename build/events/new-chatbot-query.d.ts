import { Events } from "./events";
export interface ChatbotQuery {
    subject: Events.ChatbotQuery;
    data: {
        userId: string;
        textId: string;
        text: string;
    };
}
