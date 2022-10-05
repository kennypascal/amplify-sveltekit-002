<script lang="ts">
    import type {
        IButtonProps,
        IButtonSizeTypes,
        IButtonVariantTypes
    } from './IButton';
    import { createAttributes } from './utilities/CreateAttributes';
    import { validateProps } from './utilities/PropValidation';
    import {
        getTemplateComponent,
        getTemplateRequiredProps
    } from './utilities/TemplateOptions';

    export { classNames as class };
    export let variant: IButtonVariantTypes | string;
    export let size: IButtonSizeTypes = 'md';
    export let disabled: boolean = false;
    export let block: boolean = false;
    export let options = {};

    let classNames = '';

    $: shouldRender = validateProps(
        $$props as IButtonProps,
        getTemplateRequiredProps(variant)
    );
</script>

{#if shouldRender}
    <button
        {...createAttributes(
            variant,
            size,
            block,
            classNames,
            disabled,
            $$restProps
        )}
        on:click
        on:mouseenter
        on:mouseleave
        on:mouseover
        on:mouseout
        on:mouseup
        on:mousedown
        on:mousemove
        on:focus
        on:blur
    >
        {#if variant}
            <svelte:component
                this={getTemplateComponent(variant)}
                {...options}
            />
        {/if}
    </button>
{/if}

{#if false}
    <!-- Hides warning: received an unexpected slot "default" 
    https://github.com/sveltejs/svelte/issues/4546 -->
    <slot />
{/if}
