import HeaderNav from '@components/header/components/header-nav/HeaderNav.svelte';
import { render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

vi.mock('$app/stores', () => {
    return {
        __esModule: true,
        session: {
            subscribe() {}
        }
    };
});

describe('Header Nav', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderNav);
        }).not.toThrow();
    });

    describe('level1 elements', () => {
        test('should each have a column', () => {
            render(HeaderNav);
            const level1 = screen.queryAllByTestId('level1-columns');
            level1.forEach(item => {
                expect(item).toBeInTheDocument();
                //TODO: add isFirst and isLast tests
            });
        });
    });
});
