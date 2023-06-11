import { Events } from "./events";
import { ResponseStatus } from "./types/reponse-status";
export interface ChatbotResponse {
    subject: Events.ChatbotResponse;
    data: {
        userId: string;
        textId: string;
        responseId: string;
        response: string;
        status: ResponseStatus.Responded;
    };
}
