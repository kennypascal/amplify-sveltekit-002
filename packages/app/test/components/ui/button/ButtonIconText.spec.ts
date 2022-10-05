import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/svelte';
import ButtonIconText from '@ui/button/components/button-icon-text/ButtonIconText.svelte';
import { vi } from 'vitest';

describe('ButtonIcon', () => {
    let name = 'test name';
    let label = 'test label';
    let srLabel = 'test srLabel';
    let last = true;

    test('Should render button icon', () => {
        expect(() => {
            render(ButtonIconText, {
                props: { name, label, srLabel, last }
            });
        }).not.toThrow();
    });

    test('should render if last false', () => {
        let last = false;
        expect(() => {
            render(ButtonIconText, {
                props: { name, label, srLabel, last }
            });
        }).not.toThrow();
    });

    test('should not throw warnings when all props are passed', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn');
        render(ButtonIconText, {
            props: { name, label, srLabel, last }
        });
        expect(console.warn).not.toHaveBeenCalled();
        consoleWarnMock.mockRestore();
    });

    test('should render the label', () => {
        render(ButtonIconText, {
            props: { name, label, srLabel, last }
        });
        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByText(label)).toHaveClass('tw-align-middle');
    });

    test('should render the label if last is false', () => {
        let last = false;
        render(ButtonIconText, {
            props: { name, label, srLabel, last }
        });
        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByText(label)).toHaveClass('tw-align-middle');
    });
});
