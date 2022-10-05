<script lang="ts">
    import type { ICarouselProps, ICarouselVariantTypes } from './ICarousel';
    import { createAttributes } from './utilities/CreateAttributes';
    import { validateProps } from './utilities/PropValidation';
    import {
        getTemplateComponent,
        getTemplateRequiredProps
    } from './utilities/TemplateOptions';

    let classNames = '';
    export { classNames as class };
    export let variant: ICarouselVariantTypes | string;
    export let options = {};

    $: shouldRender = validateProps(
        $$props as ICarouselProps,
        getTemplateRequiredProps(variant)
    );
</script>

{#if shouldRender}
    <svelte:component
        this={getTemplateComponent(variant)}
        {...createAttributes(classNames, $$restProps)}
        {...options}
    />
{/if}
