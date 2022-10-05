<script lang="ts">
    import CartItem from './CartItem.svelte';
    export let items: any;
    function removeItem(variantId: string) {
        // TODO: apply request to remove cart item
        items = items.filter((element: any) => element.variantId != variantId);
    }
</script>

<div class="tw-max-h-52 tw-overflow-y-auto">
    {#each items as item}
        <CartItem {item} onClose={removeItem} />
    {/each}
</div>
