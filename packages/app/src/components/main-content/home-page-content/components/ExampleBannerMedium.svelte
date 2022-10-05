<script lang="ts">
    import Content from '@ui/content/Content.svelte';
</script>

<Content
    variant="medium-banner"
    options={{
        appJSON: {
            image: {
                default:
                    'https://image.s5a.com/is/image/saksoff5th/07_030922_GIFTCARD_DESKTOP_01?scl=1&qlt=90&fmt=png'
            },
            header: {
                label: 'The Perfect Gift!',
                className: 'tw-text-accent tw-font-bold'
            },
            cta: [
                { label: 'E-Gift Card', href: '', className: 'tw-text-accent' },
                {
                    label: 'Standard Gift Card',
                    href: '',
                    className: 'tw-text-accent'
                },
                { label: 'Corporate', href: '', className: 'tw-text-accent' }
            ],
            description: {
                label: 'Give the gift that’s perfect for anyone and everyone. Use it for purchases at Saks OFF 5TH as well as saksoff5th.com.',
                className: 'tw-text-accent tw-font-bold'
            }
        }
    }}
/>
