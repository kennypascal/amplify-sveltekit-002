import HeaderMiniCart from '@components/header/components/header-mini-cart/HeaderMiniCart.svelte';
import { fireEvent, render, screen, waitFor } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

describe('HeaderMiniCart', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderMiniCart);
        }).not.toThrow();
    });

    describe('cart button', () => {
        test.skip('should show popover when hovered over', async () => {
            //TODO: get popover to show when button is hovered over

            render(HeaderMiniCart);
            const button = screen.getByTestId('mini-cart');
            expect(screen.getByTestId('popover-menu')).not.toBeInTheDocument();

            await waitFor(() => fireEvent.mouseEnter(button));
            expect(screen.getByTestId('popover-menu')).toBeInTheDocument();

            await waitFor(() => fireEvent.mouseLeave(button));
            expect(screen.getByTestId('popover-menu')).not.toBeInTheDocument();
        });
    });
});
