import Footer from '@components/footer/Footer.svelte';
import { setBreakpoint } from '@stores/Breakpoint.store';
import { contentSlots, footerLink, footerSocial } from '@stores/Footer.store';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { get } from 'svelte/store';

const mockContentSlots = get(contentSlots);
const mockFooterSocial = get(footerSocial);
const mockFooterLink = get(footerLink);

describe('Footer', () => {
    test('should render Footer', () => {
        expect(() => {
            render(Footer);
        }).not.toThrow();
    });

    describe('contentSlots', () => {
        test('isDesktop: true should render elements with proper attributes from contentSlots', async () => {
            render(Footer);
            await setBreakpoint(1024);
            mockContentSlots.forEach(contentSlot => {
                expect(
                    screen.getByRole('heading', { name: contentSlot.header })
                ).toBeInTheDocument();

                contentSlot.links.forEach(link => {
                    const linkItem = screen.getByRole('link', {
                        name: link.label
                    });
                    expect(linkItem).toBeInTheDocument();
                    expect(linkItem).toHaveAttribute('href', link.href);
                });
            });
        });

        test('isDesktop: false should render header but not children links', async () => {
            render(Footer);
            await setBreakpoint(320);
            mockContentSlots.forEach(contentSlot => {
                expect(
                    screen.getByRole('heading', { name: contentSlot.header })
                ).toBeInTheDocument();

                contentSlot.links.forEach(link => {
                    expect(() => {
                        const elLink = screen.queryByText(link.label);
                        expect(elLink).not.toBeInTheDocument();
                    });
                });
            });
        });
    });

    describe('footerSocial', () => {
        test.skip('should render footerSocial', () => {
            render(Footer);
            mockFooterSocial.forEach(social => {
                const socialEl = screen.getByRole('link', {
                    name: social.label
                });
                expect(socialEl).toBeInTheDocument();
                expect(socialEl).toHaveAttribute('href', `${social.href}`);
            });
        });
    });

    describe('footerLink', () => {
        test('should render footerLegal', () => {
            render(Footer);
            const hyperlink = screen.getByRole('link', {
                name: mockFooterLink.footerLegal.label
            });
            expect(hyperlink).toBeInTheDocument();
            expect(hyperlink).toHaveClass(mockFooterLink.footerLegal.className);
            expect(hyperlink).toHaveAttribute(
                'href',
                mockFooterLink.footerLegal.href
            );
        });

        test('should render footerCopyright', () => {
            render(Footer);
            expect(
                screen.getByText(mockFooterLink.footerCopyright.label)
            ).toBeInTheDocument();
        });

        test('should render footerApp', () => {
            render(Footer);
            expect(
                screen.getByText(mockFooterLink.footerApp.label)
            ).toBeInTheDocument();
        });

        test('should render footerFeedback', () => {
            render(Footer);
            expect(
                screen.getByText(mockFooterLink.footerFeedback.label)
            ).toBeInTheDocument();
        });
    });

    describe('Site Feedback Button', () => {
        test('Should call script from data when clicked', async () => {
            render(Footer);
            const button = screen.getByRole('button', {
                name: `${mockFooterLink.footerFeedback.label}`
            });

            expect(button).toBeInTheDocument();
            await fireEvent.click(button);
            // TODO: Fix test to work with vitest
            // expect(button).toHaveValue('clicked');
        });
    });
});
