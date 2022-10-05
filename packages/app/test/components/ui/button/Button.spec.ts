import { render, screen } from '@testing-library/svelte';
import {
    default as Button,
    default as ButtonClose
} from '@ui/button/Button.svelte';

describe('ButtonIcon', () => {
    const variant = 'icon';
    const options = { name: 'shopping-bag', srLabel: 'foo' };
    const extraProp = 'extraProp';

    test('Should render button icon', () => {
        expect(() => {
            render(Button, {
                props: { variant, options: { ...options } }
            });
        }).not.toThrow();
    });
    test('Button icon should have accessible name', () => {
        render(Button, {
            props: { variant, options: { ...options } }
        });
        expect(screen.getByRole('button')).toHaveAccessibleName(
            options.srLabel
        );
    });
    test('Button icon should have extra prop', () => {
        render(Button, {
            props: { variant, options: { ...options }, extraProp }
        });
        expect(screen.getByRole('button')).toHaveAttribute(extraProp);
    });
});

describe('Button Close', () => {
    const variant = 'close';
    const options = { name: 'close', label: 'Button Label' };
    const ariaDisabled = true;

    test('should render', async () => {
        expect(() => {
            render(ButtonClose, {
                props: {
                    variant,
                    options: { ...options },
                    ariaDisabled
                }
            });
        }).not.toThrow();
    });
    test('has an accessable name', async () => {
        render(ButtonClose, {
            props: {
                variant,
                options: { ...options },
                ariaDisabled
            }
        });
        const button = screen.getAllByRole('button');
        button.forEach(async item => {
            expect(item).toBeInTheDocument();
            expect(item).toHaveAccessibleName();
        });
    });

    test('restProps can be passed', async () => {
        render(ButtonClose, {
            props: {
                variant,
                options: { ...options },
                ariaDisabled
            }
        });
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('ariaDisabled', 'true');
    });
});
