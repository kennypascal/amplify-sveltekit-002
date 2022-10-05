<script lang="ts">
    import Image from '@components/ui/image/Image.svelte';
    import Offcanvas from '@components/ui/offcanvas/Offcanvas.svelte';
    const imageObj = {
        default: 'https://image.s5a.com/is/image/saksoff5th/0400013511129_NAVY',
        dpr: {
            default: 1,
            tablet: 2,
            mobile: 4
        }
    };
</script>

<div class="tw-grid tw-place-content-center">
    <Offcanvas id="exampleOffcanvas" position={'center'}>
        <div class="tw-inline-block tw-w-80">
            <Image variant="default" options={imageObj} />
        </div>
    </Offcanvas>
</div>
