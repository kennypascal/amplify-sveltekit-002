import HeaderSkip from '@components/header/components/header-skip/HeaderSkip.svelte';
import { render, screen } from '@testing-library/svelte';

describe('HeaderSkip', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderSkip);
        }).not.toThrow();
    });

    describe('links', () => {
        test('should have accessible names', () => {
            render(HeaderSkip);
            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).toBeInTheDocument();
                expect(link).toHaveAccessibleName();
            });
        });
        test('should be visible on focus', () => {
            render(HeaderSkip);
            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).toBeInTheDocument();
                link.focus();
                expect(link).toHaveFocus();
                expect(link).toBeVisible();
            });
        });
    });
});
