import HeaderNavLink from '@components/header/components/header-nav/components/header-nav-link/HeaderNavLink.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

describe('HeaderNavLink', () => {
    const label = 'test label here, test';
    const hexColor = 'FF0000';
    const icon = 'location';

    test('should render', () => {
        expect(() => {
            render(HeaderNavLink, {
                props: { label, hexColor, icon }
            });
        }).not.toThrow();
    });
    test('should render without icon', () => {
        expect(() => {
            render(HeaderNavLink, {
                props: { label, hexColor }
            });
        }).not.toThrow();
    });
    test('link functionality', () => {
        render(HeaderNavLink, {
            props: { label, hexColor, icon }
        });
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAccessibleName();
    });
});
