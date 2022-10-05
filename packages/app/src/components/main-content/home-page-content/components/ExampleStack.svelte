<script>
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="stack"
    options={{
        appJSON: {
            title: {
                label: 'Top Party Picks',
                className: 'tw-uppercase'
            },
            content: [
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_4UP_5-1?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Dresses'
                    },
                    promo: {
                        label: 'Up to 60% Off*'
                    },
                    description: {
                        label: 'Stand out in Alexia Admor, Mac Duggal and more.'
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
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_4UP_5-2?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Suiting'
                    },
                    promo: {
                        label: 'Starting at $199.99'
                    },
                    description: {
                        label: 'Wear Armani Collezioni. Boss Hugo Boss or Saks Fifth Avenue at your next event.'
                    },
                    cta: [
                        {
                            label: 'Shop Tuxedos & Formalwear',
                            href: '#1'
                        },
                        {
                            label: 'Shop Dress Shirts',
                            href: '#2'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_4UP_5-3?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Shoes & Handbags'
                    },
                    promo: {
                        label: 'Up to 50% off*'
                    },
                    description: {
                        label: 'Finish your look with extras from Badgley Mischka, La Regale, Lauren Lorraine and more.'
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
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_4UP_5-4?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Shoes & Accessories'
                    },
                    promo: {
                        label: 'Up To 60% Off*'
                    },
                    description: {
                        label: 'Find final touches from Boss Hugo Boss, Roberto Cavalli, Saks Fifth Avenue, and more.'
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
                            label: 'Shop Shoes for Her',
                            href: '#1'
                        }
                    ]
                }
            ]
        }
    }}
/>
