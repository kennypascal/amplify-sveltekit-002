<script lang="ts">
    import type { IHyperlinkProps, IHyperlinkVariantTypes } from './IHyperlink';
    import {
        createAttributes,
        createVariantAttributes
    } from './utilities/CreateAttributes';
    import { validateProps } from './utilities/PropValidation';
    import {
        getTemplateComponent,
        getTemplateRequiredProps
    } from './utilities/TemplateOptions';

    export let options = {};
    export let variant: IHyperlinkVariantTypes;
    export { classNames as class };

    let classNames = '';

    $: shouldRender = validateProps(
        { ...$$props, variant } as IHyperlinkProps,
        getTemplateRequiredProps(variant),
        'Hyperlink'
    );
</script>

{#if shouldRender}
    <a
        {...createAttributes(
            variant,
            classNames,
            options.external,
            $$restProps
        )}
        href={options.href}
    >
        {#if variant}
            <svelte:component
                this={getTemplateComponent(variant)}
                {...createVariantAttributes(options)}
            />
        {/if}
    </a>
{/if}
