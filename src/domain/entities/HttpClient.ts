export interface IHttpClientOptions {
    method?: string,
    headers?: Record<string, string>,
    body?: unknown
}

export interface IHttpClientResponse {
    ok?: boolean,
    status?: number,
    body?: unknown,
    data?: unknown
}
