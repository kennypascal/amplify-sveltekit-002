import HeaderSearchInput from '@components/header/components/header-search/components/header-search-input/HeaderSearchInput.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('$app/stores', () => {
    return {
        __esModule: true,
        session: {
            subscribe() {}
        }
    };
});

describe('HeaderSearchInput', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderSearchInput);
        }).not.toThrow();
    });

    test('should not throw warnings when all props are passed', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn');
        render(HeaderSearchInput);
        expect(console.warn).not.toHaveBeenCalled();
        consoleWarnMock.mockRestore();
    });

    test('should have accessable button', () => {
        render(HeaderSearchInput);
        const btn = screen.getByRole('button');
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveAccessibleName();
    });

    test('should render when search input is typed and test showClear case', async () => {
        render(HeaderSearchInput);
        const searchBar = screen.getByTestId('search');
        expect(searchBar).not.toHaveFocus();
        await fireEvent.click(searchBar);
        expect(searchBar).toHaveFocus();
        await fireEvent.input(searchBar, {
            target: { value: 'search term here' }
        });
        expect(searchBar).toHaveValue('search term here');
        const showClear = screen.getByTestId('showClear');
        await fireEvent.click(showClear);
    });
});
