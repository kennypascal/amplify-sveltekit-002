<script lang="ts">
    import Icon from '@ui/icon/Icon.svelte';
    export let name: string;
    export let label: string;
    export let srLabel: string = '';
    export let last: boolean = false;
</script>

{#if last}
    <span class={'tw-align-middle'}>{label}</span>
    <Icon {name} {srLabel} {...$$restProps} />
{:else}
    <Icon {name} {srLabel} {...$$restProps} />
    <span class={'tw-align-middle'}>{label}</span>
{/if}
