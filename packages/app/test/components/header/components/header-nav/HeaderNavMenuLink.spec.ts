import HeaderNavMenuLink from '@components/header/components/header-nav/components/header-nav-menu/components/header-nav-menu-link/HeaderNavMenuLink.svelte';
import { render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

describe('HeaderNavMenuLink', () => {
    const label = 'test label here, test';
    const hexColor = 'FF0000';

    test('should render', () => {
        expect(() => {
            render(HeaderNavMenuLink, {
                props: { label, hexColor }
            });
        }).not.toThrow();
    });

    describe('href functionality', () => {
        let href = 'www.href.com';

        test('should work with href', () => {
            render(HeaderNavMenuLink, {
                props: { label, hexColor, href }
            });
        });
        test('should work without href', () => {
            render(HeaderNavMenuLink, {
                props: { label, hexColor }
            });
        });
        test('links should have an accessable name', () => {
            render(HeaderNavMenuLink, {
                props: { label, hexColor, href }
            });
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            expect(link).toHaveAccessibleName();
        });
    });
});
