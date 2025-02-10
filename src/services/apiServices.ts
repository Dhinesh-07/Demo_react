// // ApiService.ts

import { API_URL } from "../utils/apiUtl";

export class ApiService {
    async sendRequest(api: string, params: object, timeoutMS?: number): Promise<object> {
        if (!api || !params) {
            throw new Error(`Invalid argument for sendRequest api: ${api} params: ${JSON.stringify(params)}`);
        }

        // Check network status
        if (!navigator.onLine) {
            return { error: 'Network not available' };
        }

        try {
            // Set up a timeout for the request if specified
            const controller = new AbortController();
            const timeoutId = timeoutMS ? setTimeout(() => controller.abort(), timeoutMS) : null;

            // Construct query string for GET requests
            const queryString = new URLSearchParams(params as Record<string, string>).toString();
            const url = `${API_URL}/${api}?${queryString}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-host": "get-population.p.rapidapi.com",
                    "x-rapidapi-key": "3dda37faf4msh5923d66dfe36b6fp11bc7cjsn6446e5073a18",
                },
                signal: controller.signal,
            });

            // Clear the timeout if the request completes in time
            if (timeoutId) clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return { error: error.message };
            } else {
                return { error: 'An unknown error occurred' };
            }
        }
    }
}
