type QueryParams = Record<string, string | number | boolean>;

export class HttpService {
    public get<T>(url: string, query: QueryParams): Promise<T> {
        const urlWithParams = `${url}?${HttpService.objectToQueryString(query)}`;

        return HttpService.makeRequest(urlWithParams);
    }

    private static makeRequest<ResponseData>(url: string): Promise<ResponseData> {
        return fetch(url)
            .then(response => response.ok && response.json())
            .catch(e => {
                throw new Error('Failed to fatch movie list');
            });
    }

    public static objectToQueryString(obj: QueryParams): string {
        return Object.keys(obj)
            .map(key => `${key}=${obj[key]}`)
            .join('&');
    }
}
