import FooterColumnSmall from '@components/footer/components/footer-column/FooterColumnSmall.svelte';
import { setBreakpoint } from '@stores/Breakpoint.store';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
const props = {
    'data-testid': 'footer-column-small',
    header: 'header',
    links: [
        { label: 'hyperlink1', href: 'example1.com' },
        { label: 'hyperlink2', href: 'example2.com' }
    ],
    index: 1
};

describe('Footer Column', () => {
    test('should render', () => {
        expect(() => {
            render(FooterColumnSmall, props);
        }).not.toThrow();
    });

    test('should throw warnings when missing props', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation();
        render(FooterColumnSmall);

        expect(console.warn).toHaveBeenCalledWith(
            expect.stringContaining(
                '<FooterColumnSmall> was created without expected prop'
            )
        );

        consoleWarnMock.mockRestore();
    });

    test('should not throw warnings when all props are passed', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation();
        render(FooterColumnSmall, props);
        expect(console.warn).not.toHaveBeenCalled();
        consoleWarnMock.mockRestore();
    });

    describe('prop: header', () => {
        test('should be properly rendered', async () => {
            render(FooterColumnSmall, props);
            await setBreakpoint(300);
            expect(screen.getByRole('button')).toHaveAccessibleName(
                `${props.header}`
            );
        });
    });

    describe('prop: links', () => {
        test('should be properly iterated and rendered', async () => {
            render(FooterColumnSmall, props);
            await setBreakpoint(300);
            props.links.forEach(link => {
                expect(screen.queryByText(link.label)).not.toBeInTheDocument();
            });
            const button = screen.getByRole('button');
            await fireEvent.click(button);
            props.links.forEach(link => {
                let elLink = screen.getByRole('link', { name: link.label });
                expect(elLink).toBeInTheDocument();
                expect(elLink).toHaveAccessibleName();
                expect(elLink).toHaveAttribute('href', link.href);
            });
        });
    });

    describe('prop: index', () => {
        test('should properly appened to id and class', async () => {
            const index = 5;
            const { container } = render(FooterColumnSmall, {
                ...props,
                index
            });
            await setBreakpoint(300);
            const div = screen.getByTestId(props['data-testid']);
            expect(div).toBeInTheDocument();
            expect(div).toHaveClass(`footer-column-${index}`);
        });
    });

    describe('viewport size', () => {
        describe('mobile viewport', () => {
            test('screen readers can interact with content', async () => {
                render(FooterColumnSmall, props);
                await setBreakpoint(300);
                let elHeader = screen.getByTestId(props['data-testid']);
                expect(elHeader).toHaveAttribute('aria-hidden', 'false');
            });
        });

        describe('desktop viewport', () => {
            test('screen readers cannot interact with content', async () => {
                render(FooterColumnSmall, props);
                await setBreakpoint(1024);
                expect(
                    screen.getByRole('button', {
                        name: props.header,
                        hidden: true
                    })
                );
            });
        });
    });
});
