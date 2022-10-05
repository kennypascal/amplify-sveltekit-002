<script lang="ts">
    import { default as cx } from 'classnames';
    import { getTemplateComponent } from './utilities/TemplateOptions';

    export { className as class };
    export let name: string = '';
    export let width: number = 24;
    export let height: number = 24;
    export let href: string = '';
    export let target: string = '_self';
    export let srLabel: string = '';

    if (href && !srLabel) {
        throw new Error(
            `<Icon> is missing the prop \`srLabel\` which is required when an href value is present.`
        );
    }

    let className = '';
    let targetObj = target !== '_self' ? { target } : {};
    let noOpenerObj = target !== '_self' ? { rel: 'noopener noreferrer' } : {};

    $: classes = cx(
        'icon',
        `icon-so5-${name}`,
        'tw-inline-block',
        'tw-leading-[0]',
        'tw-transition-filter',
        'tw-duration-150',
        className
    );

    $: styles = `width: ${getWidthHeight().width}px; height: ${
        getWidthHeight().height
    }px`;

    $: decorativeAttributes = {
        ...$$restProps,
        class: classes,
        style: styles,
        'aria-hidden': true
    };

    $: linkAttributes = {
        ...decorativeAttributes,
        ...targetObj,
        ...noOpenerObj
    };

    $: svgAttributes = {
        width: getWidthHeight().width,
        height: getWidthHeight().height
    };

    function getWidthHeight() {
        return name !== 'plus-minus'
            ? { width, height }
            : { width: 14, height: 14 };
    }
</script>

{#if href}
    <a {...linkAttributes} {href}>
        <svelte:component
            this={getTemplateComponent(name)}
            {...svgAttributes}
            {...$$restProps}
        />
        {#if srLabel}
            <span class="tw-sr-only">{srLabel}</span>
        {/if}
    </a>
{:else}
    <span {...decorativeAttributes}>
        <svelte:component
            this={getTemplateComponent(name)}
            {...svgAttributes}
            {...$$restProps}
        />
        {#if srLabel}
            <span class="tw-sr-only">{srLabel}</span>
        {/if}
    </span>
{/if}
