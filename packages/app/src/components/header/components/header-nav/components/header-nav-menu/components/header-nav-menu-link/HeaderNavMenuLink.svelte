<script lang="ts">
    export { classNames as class };
    export let label: string;
    export let href = '';
    export let hexColor = '';

    let classNames = '';

    $: isHover = false;
    $: customStyle = hexColor
        ? `color: ${hexColor}; border-bottom-color: ${
              isHover ? hexColor : 'transparent'
          }`
        : ``;
</script>

{#if href}
    <a
        {href}
        class={classNames}
        on:mouseenter={() => (isHover = true)}
        on:mouseleave={() => (isHover = false)}
    >
        <span style={customStyle}>{label}</span>
    </a>
{:else}
    <span class={classNames}>
        {label}
    </span>
{/if}
