import { render } from '@testing-library/svelte';
import App from '../../src/routes/index.svelte';
import { expect, test, vi } from 'vitest';

describe('App', () => {
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

    test('Should Render', () => {
        expect(() => {
            render(App);
        }).toBeDefined();
    });
});
