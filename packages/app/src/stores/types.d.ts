export interface ICommerceConfig {
    proxy?: string;
    headers: {
        authorization: string;
        [any: string]: string;
    };
    parameters: {
        clientId: string;
        organizationId: string;
        shortCode: string;
        siteId: string;
    };
    throwOnBadResponse?: boolean;
}

export interface ICommerceSearchParams {
    q: string;
    limit?: number;
}
