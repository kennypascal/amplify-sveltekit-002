<script lang="ts">
    import type { IContentProps, IContentVariantTypes } from './IContent';
    import { createAttributes } from './utilities/CreateAttributes';
    import { validateProps } from './utilities/PropValidation';
    import {
        getTemplateComponent,
        getTemplateRequiredProps
    } from './utilities/TemplateOptions';

    let classNames = '';
    export { classNames as class };
    export let variant: IContentVariantTypes | string;
    export let options = {};

    // variant is heroSlider but options contain only one object
    if(variant === 'hero-slider' && (!(options instanceof Array) || options.length <= 1) ){
        variant = options.variant || 'hero';
        if(options.length === 1) {
            options.appJSON = options[0];
        }
    }

    $: shouldRender = validateProps(
        $$props as IContentProps,
        getTemplateRequiredProps(variant),
        variant
    );
</script>

{#if shouldRender}
    <svelte:component
        this={getTemplateComponent(variant)}
        {...createAttributes(classNames, $$restProps)}
        {...options}
    />
{/if}
