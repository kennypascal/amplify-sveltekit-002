import HeaderAccount from '@components/header/components/header-user-tray/components/header-account/HeaderAccount.svelte';
import { fireEvent, render, screen, waitFor } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

describe('HeaderAccount', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderAccount);
        }).not.toThrow();
    });

    describe('sign in button', () => {
        test.skip('should show popover when hovered over', async () => {
            //TODO: get popover to show when button is hovered over

            render(HeaderAccount);
            const button = screen.getByTestId('sign-in');
            expect(screen.getByTestId('popover-menu')).not.toBeInTheDocument();

            await userEvent.hover(button);
            expect(screen.getByTestId('popover-menu')).toBeInTheDocument();

            await waitFor(() => fireEvent.mouseLeave(button));
            expect(screen.getByTestId('popover-menu')).toBeNull();
        });
    });
});
