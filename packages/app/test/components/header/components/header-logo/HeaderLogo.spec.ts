import HeaderLogo from '@components/header/components/header-logo/HeaderLogo.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Header Logo', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderLogo);
        }).not.toThrow();
    });

    describe('should have', () => {
        test('a link that has accessible name:', () => {
            render(HeaderLogo);
            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            expect(link).toHaveAccessibleName();
        });
        test('an image that has accessible description:', () => {
            render(HeaderLogo);
            const img = screen.getByRole('img');
            expect(img).toBeInTheDocument();
            expect(img).toHaveAccessibleName();
        });
    });
});
