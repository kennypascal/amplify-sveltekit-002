<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="home-cascade"
    options={{
        appJSON: {
            title: {
                label: 'Work Style',
                className: 'tw-uppercase'
            },
            content: [
                {
                    image: {
                        default: 'https://image.s5a.com/is/image/saksoff5th/28_081022_HP_5-1?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Dresses'
                    },
                    promo: {
                        label: 'Up to 60% off*',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'Chic styles from Calvin Klein, Karl Lagerfeld Paris, Tommy Hilfiger and more.'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop Now',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default: 'https://image.s5a.com/is/image/saksoff5th/28_081022_HP_5-2?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Suits'
                    },
                    promo: {
                        label: 'Up to 70% off*',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'Button up in Boss Hugo Boss, Saks Fifth Avenue, Theory and more.'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop Now',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default: 'https://image.s5a.com/is/image/saksoff5th/28_081022_HP_5-3?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Shoes & Handbags'
                    },
                    promo: {
                        label: 'Up to 50% off',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'Add Furla, Stuart Weitzman and more to your look.'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop Shoes for Her',
                            href: '#1'
                        },
                        {
                            label: 'Shop Handbags for Her',
                            href: '#2'
                        }
                    ]
                },
                {
                    image: {
                        default: 'https://image.s5a.com/is/image/saksoff5th/28_081022_HP_5-4?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Shoes & Bags'
                    },
                    promo: {
                        label: 'Up to 50% off',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'Accessorize with Cole Haan, Valentino by Mario Valentino and more.'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop Shoes for Him',
                            href: '#1'
                        },
                        {
                            label: 'Shop Bags for H',
                            href: '#2'
                        }
                    ]
                }
            ]
        }
    }}
/>
