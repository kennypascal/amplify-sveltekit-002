<script lang="ts">
    import Button from '@ui/button/Button.svelte';
    export let item: {
        image: string;
        url: string;
        brandName: string;
        productName: string;
        attributes: any[];
        priceStrike: string;
        price: string;
        quantity: number;
        variantId: string;
    };
    export let onClose: any;

    function handleClickMinus() {
        // TODO: add stock control
        if (item.quantity > 1) item.quantity--;
    }

    function handleClickPlus() {
        // TODO: add stock control
        item.quantity++;
    }

    function onCloseItem() {
        onClose(item.variantId);
    }
</script>

<div class="tw-grid tw-grid-cols-12 tw-border-b tw-py-3 tw-border-b-light-gray">
    <div class="tw-col-span-5 tw-h-32 tw-max-w-[95px]">
        <img src={item.image} alt="" />
    </div>
    <div class="tw-col-span-7 tw-max-h-60 tw-text-left tw-px-2 tw-font-sans">
        <div class="tw-relative">
            <div class="tw-absolute tw-right-px tw--mt-1 tw--mr-1.5">
                <Button
                    variant="close"
                    options={{
                        width: '13',
                        height: '13',
                        srLabel: `Remove item: ${item.productName}`
                    }}
                    on:click={onCloseItem}
                />
            </div>
            <a href={item.url}>
                <div class="tw-pt-1 tw-w-[95%]">
                    <span
                        class="tw-text-1 tw-uppercase
                        tw-tracking-widest tw-font-medium tw-text-shadow"
                        >{item.brandName}</span
                    >
                </div>
                <div>
                    <p
                        class="tw-text-2 tw-truncate tw-text-dark-gray tw-text-normal"
                    >
                        {item.productName}
                    </p>
                </div>
            </a>
        </div>
        <div>
            {#each item.attributes as attribute, i}
                <span class="tw-text-0 tw-text-dark-gray tw-text-normal"
                    >{attribute.displayValue}
                    {#if i != item.attributes.length - 1}
                        ,
                    {/if}
                </span>
            {/each}
        </div>
        <div class="tw-mb-2.5">
            {#if item.priceStrike}
                <span class="tw-sr-only">Price reduced from </span>
                <span
                    class="tw-text-1 tw-line-through tw-mr-1 tw-text-dark-gray tw-text-normal  bfx-price bfx-list-price"
                    >{item.priceStrike}</span
                >
                <span class="tw-sr-only"> to </span>
            {/if}
            {#if item.price}
                <span
                    class="tw-text-1 tw-font-bold tw-text-shadow bfx-price bfx-sale-price"
                    >{item.price}</span
                >
            {/if}
        </div>
        <!--div class="tw-mb-1">
            <span class="tw-text-mid-gray tw-font-medium tw-tracking-widest"
                >(?)Only 1 left!</span
            >
        </div>
        <div class="tw-mb-2">
            <span class="tw-text-red tw-tracking-widest">(?)Final Sale</span>
        </div-->
        <div class="tw-flex">
            <div class="tw-grid tw-w-9 tw-h-9">
                <Button
                    variant="icon"
                    class="tw-border-l tw-border-y tw-border-mid-gray hover:tw-bg-light-gray tw-pb-0"
                    options={{
                        name: 'minus',
                        srLabel: 'Decrease quantity by one',
                        width: '13',
                        height: '13'
                    }}
                    on:click={handleClickMinus}
                />
            </div>
            <div class="tw-w-9 tw-h-9">
                <label for="item-quantity" class="tw-sr-only">Quantity</label>
                <input
                    id="item-quantity"
                    type="text"
                    class="tw-w-9 tw-h-9 tw-text-center tw-border tw-border-mid-gray bfx-minicart-product-qty"
                    bind:value={item.quantity}
                />
            </div>
            <div class="tw-grid tw-w-9 tw-h-9">
                <Button
                    variant="icon"
                    class="tw-border-r tw-border-y tw-border-mid-gray hover:tw-bg-light-gray tw-pb-0"
                    options={{
                        name: 'plus',
                        srLabel: 'Increase quantity by one',
                        width: '13',
                        height: '13'
                    }}
                    on:click={handleClickPlus}
                />
            </div>
        </div>
    </div>
</div>
