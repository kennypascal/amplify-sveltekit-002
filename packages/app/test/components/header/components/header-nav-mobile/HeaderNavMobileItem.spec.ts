import HeaderNavMobileItem from '@components/header/components/header-nav-mobile/components/HeaderNavMobileItem.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

describe('HeaderNavMobileItem', () => {
    const label = 'disclosure label here';
    const url = 'www.test.com';
    const categories = [
        {
            label: 'Level1 Label1 category label1',
            url: 'mockurl1.com'
        }
    ];
    const hexColor = '#FF0000';

    test('should render', () => {
        expect(() => {
            render(HeaderNavMobileItem, {
                props: { label, url, categories, hexColor }
            });
        }).not.toThrow();
    });
    test('should throw warnings when missing props', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation();
        render(HeaderNavMobileItem);
        expect(console.warn).toHaveBeenCalledWith(
            expect.stringContaining(
                '<HeaderNavMobileItem> was created without expected prop'
            )
        );
        consoleWarnMock.mockRestore();
    });

    test('disclosure button should be accessable', () => {
        render(HeaderNavMobileItem, {
            props: { label, url, categories, hexColor }
        });
        const btn = screen.getByTestId('disclosure-button');
        expect(btn).toHaveAccessibleName();
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveClass(
            'tw-text-left tw-w-full tw-block tw-relative tw-text-1 tw-uppercase tw-font-medium tw-tracking-[1.5px] tw-p-4'
        );
    });
    test('disclosure label should have correct style', () => {
        render(HeaderNavMobileItem, {
            props: { label, url, categories, hexColor }
        });
        expect(screen.getByText(label)).toBeInTheDocument();
        const text = screen.getByText(label);
        expect(text).toHaveStyle('color: ' + hexColor + ';');
    });
    test('disclosure should have correct classes', () => {
        render(HeaderNavMobileItem, {
            props: { label, url, categories, hexColor }
        });
        const disclosure = screen.getByTestId('disclosure');
        expect(disclosure).toHaveClass('tw-border-b tw-border-oxygen');
    });
    test('disclosure button should handle being clicked', async () => {
        expect(async () => {
            render(HeaderNavMobileItem, {
                props: { label, url, categories, hexColor }
            });
            const btn = screen.getByTestId('disclosure-button');
            await fireEvent.click(btn);
        }).not.toThrow();
    });
    test('hyperlink case should render', () => {
        expect(async () => {
            render(HeaderNavMobileItem, {
                props: { label, url }
            });
            const hyperlink = screen.getByRole('link');
            expect(hyperlink).toHaveClass(
                'tw-text-left tw-w-full tw-block tw-relative tw-text-1 tw-uppercase tw-font-medium tw-tracking-[1.5px] tw-p-4'
            );
        }).not.toThrow();
    });

    describe('.getLabelClassnames() should return the correct classes', () => {
        test('level 0', () => {
            const level = 1;
            render(HeaderNavMobileItem, {
                props: { label, url, categories, hexColor, level }
            });
            const btn = screen.getByTestId('disclosure-button');
            expect(btn).toHaveClass(
                'tw-text-left tw-w-full tw-block tw-relative tw-text-1 tw-uppercase tw-font-medium tw-tracking-[1.5px] tw-p-4'
            );
        });
        test('level 1', () => {
            const level = 2;
            render(HeaderNavMobileItem, {
                props: { label, url, categories, hexColor, level }
            });
            const btn = screen.getByTestId('disclosure-button');
            expect(btn).toHaveClass(
                'tw-text-left tw-w-full tw-block tw-relative tw-text-1 tw-py-2 tw-px-4'
            );
        });
        test('level 2', () => {
            const level = 3;
            render(HeaderNavMobileItem, {
                props: { label, url, categories, hexColor, level }
            });
            const btn = screen.getByTestId('disclosure-button');
            expect(btn).toHaveClass(
                'tw-text-left tw-w-full tw-block tw-relative tw-text-1 tw-py-2 tw-pl-12 tw-pr-6'
            );
        });
    });
});
