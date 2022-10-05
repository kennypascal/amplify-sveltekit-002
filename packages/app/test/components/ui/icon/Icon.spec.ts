import { render, screen } from '@testing-library/svelte';
import Icon from '@ui/icon/Icon.svelte';

describe('Icon', () => {
    const id = 'iconTest';
    const defaultProps = {
        'data-testid': id,
        name: 'bag'
    };

    describe('should render...', () => {
        test(`when name is '${defaultProps.name}'`, () => {
            const { container } = render(Icon, { props: { ...defaultProps } });
            const iconElement = screen.getByTestId(id);
            expect(iconElement).toHaveClass(`icon-so5-${defaultProps.name}`);
            expect(iconElement).toHaveAttribute('aria-hidden');
        });
    });

    describe('should throw error...', () => {
        test('when href is present without srLabel', () => {
            expect(() => {
                render(Icon, {
                    props: {
                        ...defaultProps,
                        href: 'http://www.saksoff5th.com'
                    }
                });
            }).toThrowError();
        });
    });
});
