import { render, screen } from '@testing-library/svelte';
import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';

describe('Hyperlink', () => {
    const consoleErrorMock = vi.spyOn(console, 'error').mockImplementation();
    const label = 'hyperlink';
    const href = 'example.com';
    const icon = 'twitter';

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('variant: default', () => {
        const variant = 'default';
        describe('missing required props', () => {
            test('variant: log error and not render', () => {
                const consoleWarnMock = vi
                    .spyOn(console, 'warn')
                    .mockImplementation();
                render(Hyperlink, { props: { options: { href, label } } });
                expect(console.error).toBeCalled();
                expect(console.warn).toBeCalled();
                expect(() => {
                    screen.getByRole('link');
                }).toThrow();
            });

            test('options: log error and not render', () => {
                render(Hyperlink, { props: { variant } });
                expect(console.error).toBeCalled();
                expect(() => {
                    screen.getByRole('link');
                }).toThrow();
            });

            test('options.label: log error and not render', () => {
                render(Hyperlink, { props: { variant, options: { href } } });
                expect(console.error).toBeCalled();
                expect(() => {
                    screen.getByRole('link');
                }).toThrow();
            });

            test('options.href: log error and not render', () => {
                render(Hyperlink, { props: { variant, options: { label } } });
                expect(console.error).toBeCalled();
                expect(() => {
                    screen.getByRole('link');
                }).toThrow();
            });
        });

        describe('with required props', () => {
            test('should render and without error', () => {
                render(Hyperlink, {
                    props: { variant, options: { label, href } }
                });
                expect(console.error).not.toBeCalled();
                expect(screen.getByRole('link')).toBeInTheDocument();
            });

            test('should have href with href prop', () => {
                render(Hyperlink, {
                    props: { variant, options: { label, href } }
                });
                const link = screen.getByRole('link');
                expect(link).toBeInTheDocument();
                expect(link).toHaveAttribute('href', href);
            });

            test('should have label', () => {
                render(Hyperlink, {
                    props: { variant, options: { label, href } }
                });
                expect(screen.getByRole('link')).toBeInTheDocument();
                expect(screen.getByText(label)).toBeInTheDocument();
            });

            test('should set attributes to Hyperlink component with ...restProps', () => {
                const prop1 = 'prop1';
                const prop2 = 'prop2';
                render(Hyperlink, {
                    props: { variant, options: { label, href }, prop1, prop2 }
                });
                const link = screen.getByRole('link');
                expect(link).toHaveAttribute(prop1);
                expect(link).toHaveAttribute(prop2);
            });
        });

        describe('options.external', () => {
            test('not defined should not have target nor rel property', () => {
                render(Hyperlink, {
                    props: { variant, options: { label, href } }
                });
                const link = screen.getByRole('link');
                expect(link).not.toHaveAttribute('target');
                expect(link).not.toHaveAttribute('rel');
            });

            test('set to false should not have target nor rel property', () => {
                render(Hyperlink, {
                    props: {
                        variant,
                        options: { label, href, external: false }
                    }
                });
                const link = screen.getByRole('link');
                expect(link).not.toHaveAttribute('target');
                expect(link).not.toHaveAttribute('rel');
            });

            test('set to true should have target and rel property', () => {
                render(Hyperlink, {
                    props: { variant, options: { label, href, external: true } }
                });
                const link = screen.getByRole('link');
                expect(link).toHaveAttribute(
                    'target',
                    expect.stringContaining('_blank')
                );
                expect(link).toHaveAttribute(
                    'rel',
                    expect.stringContaining('noopener noreferrer')
                );
            });
        });

        test('classes should be added appropriatly with prop class', () => {
            const mockClassName = 'mockClassName';
            render(Hyperlink, {
                props: {
                    variant,
                    class: { mockClassName },
                    options: { label, href }
                }
            });
            expect(screen.getByRole('link')).toHaveClass(mockClassName);
        });
    });

    describe('variant: icon', () => {
        const variant = 'icon';
        test('missing options.icon: log error and not render', () => {
            render(Hyperlink, { props: { variant, options: { label, href } } });
            expect(console.error).toBeCalled();
            expect(() => {
                screen.getByRole('link');
            }).toThrow();
        });

        test('should render icon', () => {
            const results = render(Hyperlink, {
                props: { variant, options: { label, href, icon } }
            });
            const iconElement = results.container.querySelector('svg');
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            expect(iconElement).toBeInTheDocument();
            expect(link).toHaveAccessibleName();
        });

        test('should render label with screen-reader-only class', () => {
            render(Hyperlink, {
                props: { variant, options: { label, href, icon } }
            });
            const spanElement = screen.getByText(label);
            expect(screen.getByRole('link')).toBeInTheDocument();
            expect(spanElement).toBeInTheDocument();
            expect(spanElement).toHaveClass('tw-sr-only');
        });
    });

    describe('variant: icon-text', () => {
        const variant = 'icon-text';
        test('missing options.icon: log error and not render', () => {
            render(Hyperlink, { props: { variant, options: { label, href } } });
            expect(console.error).toBeCalled();
            expect(() => {
                screen.getByRole('link');
            }).toThrow();
        });

        test('should render icon and label', () => {
            const results = render(Hyperlink, {
                props: { variant, options: { label, href, icon } }
            });
            const iconElement = results.container.querySelector('svg');
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            expect(screen.getByText(label)).toBeInTheDocument();
            expect(iconElement).toBeInTheDocument();
            expect(link).toHaveAccessibleName(`${label}`);
        });
    });
});
