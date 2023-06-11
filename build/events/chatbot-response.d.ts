import { Events } from "./events";
export interface ChatbotResponse {
    subject: Events.ChatbotResponse;
    data: {
        userId: string;
        textId: string;
        responseId: string;
        response: string;
    };
}
