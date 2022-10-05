<script lang="ts">
    import Image from '@components/ui/image/Image.svelte';
    const imageObj = {
        default: 'https://image.s5a.com/is/image/saksoff5th/0400013511129_NAVY',
        dpr: {
            default: 1,
            tablet: 2,
            mobile: 4
        }
    };
    const imageObj2 = {
        default:
            'https://image.s5a.com/is/image/saksoff5th/26_072722_SHOESATPPTENDS_SHOE_NA_DESKTOP?scl=1&fmt=webp',
        mobile: 'https://image.s5a.com/is/image/saksoff5th/26_072722_SHOESATPPTENDS_SHOE_NA_MOBILE?scl=1&fmt=webp',
        tablet: 'https://image.s5a.com/is/image/saksoff5th/26_072722_SHOESATPPTENDS_SHOE_NA_MOBILE?scl=1&fmt=webp'
    };
</script>

<Image variant="default" options={imageObj} />
<Image variant="art-direction" options={imageObj2} />
