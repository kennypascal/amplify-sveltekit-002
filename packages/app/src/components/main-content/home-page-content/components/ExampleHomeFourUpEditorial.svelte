<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="home-four-up-editorial"
    options={{
        appJSON: {
            title: {
                label: 'Finishing Touches',
                className: 'tw-uppercase'
            },
            content: [
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_3UP_5-3?scl=1&fmt=webp'
                    },
                    cta: [
                        {
                            label: 'Shop Shoes',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_3UP_5-1?scl=1&fmt=webp'
                    },
                    cta: [
                        {
                            label: 'Shop Sandals',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/25_072022_HP_3UP_5-2?scl=1&fmt=webp'
                    },
                    cta: [
                        {
                            label: 'Shop Sunglasses',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/24_071322_HP_3UP_5-2?scl=1&fmt=webp'
                    },
                    cta: [
                        {
                            label: 'Shop Handbags',
                            href: '#1'
                        }
                    ]
                }
            ]
        }
    }}
/>
