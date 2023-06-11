import { Events } from "./events";
export interface ReportResponse {
    subject: Events.ReportResponse;
    data: {
        userId: string;
        textId: string;
        responseId: string;
        responseRequired: string;
    };
}
