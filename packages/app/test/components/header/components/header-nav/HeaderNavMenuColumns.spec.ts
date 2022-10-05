import HeaderNavMenuColumns from '@components/header/components/header-nav/components/header-nav-menu/components/header-nav-menu-columns/HeaderNavMenuColumns.svelte';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

const props = {
    columns: {
        label: 'Level1 Label1',
        categories: [
            {
                label: 'Level1 Label1 category label1',
                url: 'mockurl1.com',
                isClickable: true,
                columnNumber: 1
            },
            {
                label: 'Level1 Label1 category2 label1',
                categories: [
                    {
                        label: 'Level1 Label1 category2 label1',
                        url: 'mockurl2.com',
                        isClickable: true
                    },
                    {
                        label: 'Level1 Label1 category2 label2',
                        url: 'mockurl3.com',
                        isClickable: true
                    }
                ],
                url: 'mockurl4.com',
                isClickable: false,
                columnNumber: 1
            }
        ],
        url: 'mockurl6.com',
        isClickable: true
    },
    tout: []
};

describe('HeaderNavMenuColumns', () => {
    test('should render', () => {
        expect(() => {
            render(HeaderNavMenuColumns, { props: props });
        }).not.toThrow();
    });
});
