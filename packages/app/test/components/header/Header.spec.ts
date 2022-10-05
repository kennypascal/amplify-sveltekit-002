import Header from '@components/header/Header.svelte';
import { render, screen } from '@testing-library/svelte';
import { mockIntersectionObserver } from 'jsdom-testing-mocks';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

vi.mock('$app/stores', () => {
    return {
        __esModule: true,
        session: {
            subscribe() {}
        }
    };
});
const io = mockIntersectionObserver();

describe('Header', () => {
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
            render(Header);
        }).not.toThrow();
    });

    test('restProps are appended', () => {
        let props = { foo: 'bar', 'data-testid': 'testing' };
        render(Header, props);
        expect(screen.getByTestId(props['data-testid'])).toHaveAttribute(
            'foo',
            'bar'
        );
    });
});
