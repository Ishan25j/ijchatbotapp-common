import { Events } from "./events";
import { ResponseStatus } from "./types/reponse-status";
export interface ReportResponse {
    subject: Events.ReportResponse;
    data: {
        userId: string;
        textId: string;
        responseId: string;
        responseRequired: string;
        status: ResponseStatus.Reported;
    };
}
