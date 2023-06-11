import { Events } from "./events";
import { Status } from "./types/status-type";

export interface ChatbotResponse {
    subject: Events.ChatbotResponse;
    data: {
        userId: string;
        textId: string;
        responseId: string;
        response: string;
    }
}