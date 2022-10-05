<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="home-two-x-two"
    options={{
        appJSON: {
            title: {
                label: 'Discover Top Deals'
            },
            content: [
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_4UP_6-1?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Lightweight Jackets'
                    },
                    promo: {
                        label: 'Up to 60% off*',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'Shop layers from 7 For All Mankind, Boss Hugo Boss, Joe’s Jeans, Theory and more.'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop for Her',
                            href: '#1'
                        },
                        {
                            label: 'Shop for Him',
                            href: '#2'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_4UP_6-2?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Jeans'
                    },
                    promo: {
                        label: 'Starting at $69.99'
                    },
                    description: {
                        label: 'Pick up new pairs from G-Star RAW, Hudson, Re/done, True Religion and more.'
                    },
                    disclaimer: {
                        label: 'Disclaimer'
                    },
                    cta: [
                        {
                            label: 'Shop for Her',
                            href: '#1'
                        },
                        {
                            label: 'Shop for Him',
                            href: '#2'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_4UP_6-3?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Handbags'
                    },
                    promo: {
                        label: 'Up to 50% off*',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'description description description description description'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop Her',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_4UP_6-4?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Bags'
                    },
                    promo: {
                        label: 'Up to 50% off*',
                        className: 'tw-uppercase'
                    },
                    description: {
                        label: 'Carry it all in Giuseppe Zanotti, Roberto Graham, Valentino Garavani and more.'
                    },
                    disclaimer: {
                        label: 'Reduction from Market Price.'
                    },
                    cta: [
                        {
                            label: 'Shop Him',
                            href: '#1'
                        }
                    ]
                }
            ]
        }
    }}
/>
