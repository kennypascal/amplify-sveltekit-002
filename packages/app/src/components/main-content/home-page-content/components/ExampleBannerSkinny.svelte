<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="banner-skinny"
    options={{
        appJSON: {
            image: {
                default:
                    'https://image.s5a.com/is/image/saksoff5th/main-loyalty?dpr=on,1'
            },
            header: {
                label: 'Win a lux NYC getaway*',
                className: 'lg:tw-text-white'
            },
            cta: [
                {
                    label: 'Enter to Win',
                    href: '#1',
                    className: 'lg:tw-text-white'
                },
                {
                    label: 'Shop Now',
                    href: '#2',
                    className: 'lg:tw-text-white'
                }
            ]
        }
    }}
/>
