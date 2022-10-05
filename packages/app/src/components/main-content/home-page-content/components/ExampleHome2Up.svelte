<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="home-2-up"
    options={{
        appJSON: {
            title: {
                label: 'So many layers I tiered up',
                className: 'tw-uppercase'
            },
            content: [
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/26_072722_HP_WANT_LIST_WA?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Yummy Layers'
                    },
                    promo: {
                        label: 'for her'
                    },
                    description: {
                        label: 'Ice cream oat cake macaroon bear claw pastry lemon drops marzipan cake. Tart apple pie chocolate tootsie roll sweet.'
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
                            'https://image.s5a.com/is/image/saksoff5th/26_072722_HP_WANT_LIST_MS?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Effortless Layers'
                    },
                    promo: {
                        label: 'For him'
                    },
                    description: {
                        label: 'Chocolate pastry cake pastry wafer candy lollipop. Gummi bears topping oat cake.'
                    },
                    disclaimer: {
                        label: 'Disclaimer'
                    },
                    cta: [
                        {
                            label: 'Shop Now',
                            href: '#1'
                        }
                    ]
                }
            ]
        }
    }}
/>
