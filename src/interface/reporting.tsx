export interface ReportingIndexPost {
    username: string;
}

export interface ReportingIndexGet {
    analytics: ReportingAnalytics[];
}

export interface ReportingAnalytics {
    year: number;
    month: number;
    lead: number;
    oppo: number;
    impressions: number;
}
