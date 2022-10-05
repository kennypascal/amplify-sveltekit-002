import { CommerceSdk } from '@stores/api/CommerceSdk';

export async function POST(
    event: any
): Promise<{ body: string } | { error: string; status: number }> {
    const { searchTerm } = await event.request.json();
    const searchSuggestions = await CommerceSdk.getSearchSuggestions(
        searchTerm
    );

    return { body: JSON.stringify(searchSuggestions) };
}
