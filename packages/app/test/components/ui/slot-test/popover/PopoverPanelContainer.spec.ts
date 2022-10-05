import PopoverPanelContainer from '@components/ui/popover/PopoverPanelContainer.svelte';
import { render } from '@testing-library/svelte';

describe('PopoverPanelContainer', () => {
    test('should render', () => {
        expect(() => {
            render(PopoverPanelContainer);
        }).not.toThrow();
    });
});
