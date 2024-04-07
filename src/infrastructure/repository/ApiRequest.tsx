export const ApiRequest = async <T,>(endpoint: string): Promise<T> => {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return await response.json();
};