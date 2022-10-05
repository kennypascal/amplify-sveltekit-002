<script lang="ts">
    import Icon from '@ui/icon/Icon.svelte';
    export let name: string;
    export let srLabel: string;
</script>

<Icon {name} {srLabel} {...$$restProps} />
{#if srLabel}
    <span class="tw-sr-only">{srLabel}</span>
{/if}
