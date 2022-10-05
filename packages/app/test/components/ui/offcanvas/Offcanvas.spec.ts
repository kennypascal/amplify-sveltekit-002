import { render, screen } from '@testing-library/svelte';
import Offcanvas from '@ui/offcanvas/Offcanvas.svelte';

describe('Offcanvas', () => {
    const id = 'OffcanvasTestID';
    const defaultProps = {
        id,
        'data-testid': id
    };

    describe('should render...', () => {
        test(`when id is '${id}'`, () => {
            const { container } = render(Offcanvas, {
                props: { ...defaultProps }
            });
            const OffcanvasElement = screen.getByTestId(id);
            const OffcanvasOpenBtn = OffcanvasElement.querySelector(
                'offcanvas-open-btn-container'
            );
            const OffcanvasCloseBtn = OffcanvasElement.querySelector(
                'offcanvas-close-btn-container'
            );
            const OffcanvasContent = OffcanvasElement.querySelector(
                'offcanvas-content-container'
            );
            expect(OffcanvasOpenBtn).toBeDefined();
            expect(OffcanvasCloseBtn).toBeDefined();
            expect(OffcanvasContent).toBeDefined();
        });
    });
    describe('should open...', () => {
        test(`when then open button is clicked`, async () => {
            const { container } = render(Offcanvas, {
                props: { ...defaultProps }
            });
            const OffcanvasElement = screen.getByTestId(id);
            const OffcanvasOpenBtn = OffcanvasElement.querySelector(
                'offcanvas-open-btn-container'
            );
            // const OffcanvasCloseBtn = screen.findBy
            const OffcanvasContent = OffcanvasElement.querySelector(
                'offcanvas-content-container'
            );

            // expect(OffcanvasOpenBtn).toBeInTheDocument();
            // await fireEvent.click(OffcanvasCloseBtn);
        });
    });
});
