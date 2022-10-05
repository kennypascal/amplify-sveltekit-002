import HeaderPromoBanner from '@components/header/components/header-promo-banner/HeaderPromoBanner.svelte';
import { cleanup, render } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

afterEach(cleanup);
describe('HeaderPromoBanner', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn()
            }))
        });
    });
    test('should render', () => {
        expect(() => {
            render(HeaderPromoBanner);
        }).not.toThrow();
    });
});
