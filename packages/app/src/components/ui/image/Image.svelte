<script lang="ts">
    import type { IImageProps, IImageVariantTypes } from './IImage';
    import { createAttributes } from './utilities/CreateAttributes';
    import { validateProps } from './utilities/PropValidation';
    import {
        getTemplateComponent,
        getTemplateRequiredProps
    } from './utilities/TemplateOptions';
    export let options = {};
    export let variant: IImageVariantTypes;
    export { classNames as class };

    let classNames = '';

    $: shouldRender = validateProps(
        { ...$$props, variant } as IImageProps,
        getTemplateRequiredProps(variant),
        'Image'
    );
</script>

{#if shouldRender && variant}
    <svelte:component
        this={getTemplateComponent(variant)}
        {...createAttributes(classNames, $$restProps)}
        imageObj={options}
    />
{/if}
