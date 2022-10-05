<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
            variant="hero"
            options={{
                appJSON: {
                    placement: 'left',
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/26_072722_SHOESATPPTENDS_SHOE_NA_DESKTOP?scl=1&fmt=webp',
                        mobile: 'https://image.s5a.com/is/image/saksoff5th/26_072722_SHOESATPPTENDS_SHOE_NA_MOBILE?scl=1&fmt=webp',
                        tablet: 'https://image.s5a.com/is/image/saksoff5th/26_072722_SHOESATPPTENDS_SHOE_NA_MOBILE?scl=1&fmt=webp'
                    },
                    preheader: {
                        label: 'Last Day',
                    },
                    header: {
                        label: 'Shoes',
                        className: 'tw-uppercase'
                    },
                    promo: {
                        label: 'At Must-shop prices',
                    },
                    description: {
                        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
                    },
                    disclaimer: {
                        label: 'Disclaimer copy'
                    },
                    cta: [
                        {
                            label: 'Shop Under $9.99',
                            href: '#1'
                        },
                        {
                            label: 'Shop Under $24.99',
                            href: '#2',
                            color: '#00686c'
                        },
                        {
                            label: 'Shop Under $49.99',
                            srLabel: 'Shop Now Dresses',
                            href: 'https://www.saksoff5th.com/dresses'
                        },
                        {
                            label: 'Shop Under $99.99',
                            href: 'https://www.saksoff5th.com'
                        },
                        {
                            label: 'Shop All Shoes',
                            href: 'https://www.saksoff5th.com'
                        }
                    ]
                }
            }}
        />