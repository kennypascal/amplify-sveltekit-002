<script lang="ts">
    import { VITE_OPTIMIZELY_KEY } from '@stores/api/creds';
</script>

<svelte:head>
    <script async
        src="https://cdn-pci.optimizely.com/js/{VITE_OPTIMIZELY_KEY}.js"></script>
</svelte:head>
