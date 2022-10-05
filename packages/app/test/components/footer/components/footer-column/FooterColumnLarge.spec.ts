import FooterColumnLarge from '@components/footer/components/footer-column/FooterColumnLarge.svelte';
import { setBreakpoint } from '@stores/Breakpoint.store';
import { render, screen } from '@testing-library/svelte';
const props = {
    'data-testid': 'footer-column-large',
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
            render(FooterColumnLarge, props);
        }).not.toThrow();
    });

    test.skip('should throw warnings when missing props', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation();
        render(FooterColumnLarge);

        expect(console.warn).toHaveBeenCalledWith(
            expect.stringContaining(
                '<FooterColumnLarge> was created without expected prop'
            )
        );

        consoleWarnMock.mockRestore();
    });

    test('should not throw warnings when all props are passed', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation();
        render(FooterColumnLarge, props);
        expect(console.warn).not.toHaveBeenCalled();
        consoleWarnMock.mockRestore();
    });

    describe('ul to have accessible name', () => {
        test('should be properly associated with header', async () => {
            render(FooterColumnLarge, props);
            await setBreakpoint(1024);
            expect(screen.getByRole('list')).toHaveAccessibleName(
                `${props.header}`
            );
        });
    });

    describe('prop: header', () => {
        test('should be properly rendered', async () => {
            render(FooterColumnLarge, props);
            await setBreakpoint(1024);
            expect(
                screen.getByRole('heading', { level: 2 })
            ).toHaveAccessibleName(`${props.header}`);
        });
    });

    describe('prop: links', () => {
        test('should be properly iterated and rendered', async () => {
            render(FooterColumnLarge, props);
            await setBreakpoint(1024);
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
            const { container } = render(FooterColumnLarge, {
                ...props,
                index
            });
            await setBreakpoint(1024);
            const div = screen.getByTestId(props['data-testid']);
            expect(div).toBeInTheDocument();
            expect(div).toHaveClass(`footer-column-${index}`);
        });
    });

    describe('viewport size', () => {
        describe('desktop viewport', () => {
            test('screen readers can interact with content', async () => {
                render(FooterColumnLarge, props);
                await setBreakpoint(1024);
                let elHeader = screen.getByTestId(props['data-testid']);
                expect(elHeader).toHaveAttribute('aria-hidden', 'false');
            });
        });

        describe('mobile viewport', () => {
            test('screen readers cannot interact with content', async () => {
                render(FooterColumnLarge, props);
                await setBreakpoint(300);
                expect(
                    screen.getByRole('heading', {
                        name: props.header,
                        hidden: true
                    })
                );
            });
        });
    });
});
