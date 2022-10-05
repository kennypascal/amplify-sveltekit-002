<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="home-three-up"
    options={{
        appJSON: {
            title: {
                label: 'Exercise Essentials',
                className: 'tw-uppercase'
            },
            content: [
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_3UP_ACTIVE?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Active'
                    },
                    description: {
                        label: 'home3up description description description description description home3up description description description description description home3up description description description description description home3up description description description description description'
                    },
                    cta: [
                        {
                            label: 'Shop For Her',
                            href: '#1',
                            srLabel: 'someValue'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_3UP_6-2?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Sets'
                    },
                    description: {
                        label: 'description description description description description'
                    },
                    cta: [
                        {
                            label: 'Shop For Kids',
                            href: '#1'
                        }
                    ]
                },
                {
                    image: {
                        default:
                            'https://image.s5a.com/is/image/saksoff5th/27_080322_HP_3UP_6-3?scl=1&fmt=webp'
                    },
                    header: {
                        label: 'Golf'
                    },
                    description: {
                        label: 'description description description description description description description description description'
                    },
                    cta: [
                        {
                            label: 'Shop Now',
                            href: '#1'
                        },
                        {
                            label: 'Shop Now',
                            href: '#2'
                        }
                    ]
                }
            ]
        }
    }}
/>
