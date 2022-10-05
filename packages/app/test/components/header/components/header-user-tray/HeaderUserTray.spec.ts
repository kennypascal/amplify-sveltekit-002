import HeaderUserTray from '@components/header/components/header-user-tray/HeaderUserTray.svelte';
import { cleanup, render, screen } from '@testing-library/svelte';

afterEach(cleanup);
describe('Header', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderUserTray);
        }).not.toThrow();
    });
});
