export type ActivityType = "match" | "practice";

export interface Activity {
    date: string;  //YYYY-MM-DD
    type: ActivityType;
    goals?: number;   //only for match
}
