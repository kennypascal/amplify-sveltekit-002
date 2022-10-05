import HeaderNavMenu from '@components/header/components/header-nav/components/header-nav-menu/HeaderNavMenu.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

const props = {
    level1: {
        label: 'Level1 Label1',
        categories: [
            {
                label: 'Level1 Label1 category label1',
                url: 'mockurl1.com',
                isClickable: true,
                columnNumber: 1
            },
            {
                label: 'Level1 Label1 category2 label1',
                categories: [
                    {
                        label: 'Level1 Label1 category2 label1',
                        url: 'mockurl2.com',
                        isClickable: true
                    },
                    {
                        label: 'Level1 Label1 category2 label2',
                        url: 'mockurl3.com',
                        isClickable: true
                    }
                ],
                url: 'mockurl4.com',
                isClickable: false,
                columnNumber: 1
            }
        ],
        url: 'mockurl6.com',
        isClickable: true
    }
};

describe('HeaderNavMenu', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderNavMenu, { props: props });
        }).not.toThrow();
    });

    describe('button', () => {
        test('should have accessible names', async () => {
            render(HeaderNavMenu, { props: props });
            const button = screen.getAllByRole('button');
            button.forEach(async item => {
                expect(item).toBeInTheDocument();
                expect(item).toHaveAccessibleName();
            });
        });
        test('should show popover when clicked', async () => {
            render(HeaderNavMenu, { props: props });
            const button = screen.getAllByRole('button');
            button.forEach(async item => {
                expect(
                    screen.queryByText(props.level1.categories[0].label)
                ).not.toBeInTheDocument();
                await fireEvent.click(item);
                expect(
                    screen.queryByText(props.level1.categories[0].label)
                ).toBeInTheDocument();
            });
        });
        test('should have focus when clicked', async () => {
            render(HeaderNavMenu, { props: props });
            const button = screen.getAllByRole('button');
            button.forEach(async item => {
                expect(item).not.toHaveFocus();
                await fireEvent.click(item);
                expect(item).toHaveFocus();
            });
        });
    });
});
