// import HeaderNavMenu from '@components/header/components/header-nav/components/header-nav-menu/HeaderNavMenu.svelte';
import HeaderNavMobile from '@components/header/components/header-nav-mobile/HeaderNavMobile.svelte';
import { mobileNav } from '@stores/Header.store';
import { render, screen } from '@testing-library/svelte';
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
            subscribe() {
                mobileNav.set([{ label: 'label1', url: 'xyz.com' }]);
            }
        }
    };
});

describe('HeaderNavMobile', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderNavMobile);
        }).not.toThrow();
    });

    test('contain hamburger button', () => {
        render(HeaderNavMobile);
        const btn = screen.getByRole('button', { name: 'Open Menu' });
        expect(btn).toBeInTheDocument();
    });

    // TODO: properly set up mock to increase coverage rate
});
