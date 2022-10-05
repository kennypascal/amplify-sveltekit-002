<script lang="ts">
    import Icon from '@ui/icon/Icon.svelte';
    export let label: string;
    export let icon: string;
</script>

<Icon name={icon} />
<span>{label}</span>