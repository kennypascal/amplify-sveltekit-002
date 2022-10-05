<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="banner-large"
    options={{
        appJSON: {
            placement: 'center',
            image: {
                default:
                    'https://image.s5a.com/is/image/saksoff5th/27_080522_HP_SUNBOGO_HERO?scl=1&fmt=webp'
            },
            header: {
                label: 'Sunglasses'
            },
            promo: { label: 'Buy 1 Pair Get 1 Pair 50% off' },
            description: {
                label: 'Use code SHADES on Gucci, Saint Laurent and more.'
            },
            disclaimer: {
                label: 'Offer Ends Sun Aug 7,2022'
            },
            cta: [
                {
                    label: 'Shop For Her',
                    href: '#1'
                },
                {
                    label: 'Shop For Him',
                    href: '#2'
                }
            ]
        }
    }}
/>