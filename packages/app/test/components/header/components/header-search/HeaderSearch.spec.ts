import HeaderSearch from '@components/header/components/header-search/HeaderSearch.svelte';
import { render } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

describe('HeaderSearch', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderSearch);
        }).not.toThrow();
    });
});
