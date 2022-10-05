<script lang="ts">
    export let jsonld: any;
    jsonld = JSON.stringify(jsonld);
</script>

<svelte:head>
    {@html `<${'script type="application/ld+json"'}>${jsonld}</script>`}
</svelte:head>
