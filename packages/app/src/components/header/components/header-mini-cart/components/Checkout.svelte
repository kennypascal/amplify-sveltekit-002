<script lang="ts">
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';

    export let data: any;
</script>

<div class="tw-px-3">
    <div class="tw-flow-root tw-pt-4">
        <p class="tw-text-3 tw-font-medium tw-float-left">Estimated Total</p>
        <p
            class="tw-text-3 tw-font-medium tw-float-right bfx-price bfx-minicart-total"
        >
            {data.estimatedTotal}
        </p>
    </div>

    {#if data.loyalty !== false}
        <!-- TODO: Update when minicart data issue is resolved -->
        <!-- {@html data.loyalty} -->
        <div
            class="row cart-info-sec no-gutters contrast-color-accent loyaltyPointsMessage"
            id="loyaltyPointsMessage"
        >
            <div class="info-name">
                <span>Points to be Earned </span>
            </div>
            <div class="info-value">
                <span class="text-right"> 8 pts </span>
            </div>
        </div>
    {/if}

    {#if data.promo}
        {@html data.promo}
    {/if}

    <div
        class="tw-grid tw-grid-cols-12 tw-py-3 tw-border hover:tw-border-accent tw-rounded-sm tw-cursor-pointer
        tw-bg-black hover:tw-bg-accent tw-text-white tw-text-center"
    >
        <Hyperlink
            variant="default"
            options={{
                href: '#miniCart',
                label: 'Checkout'
            }}
            class="tw-p-1 tw-text-2 tw-font-medium tw-tracking-widest tw-uppercase tw-text-center tw-col-span-12"
        />
    </div>

    {#if data.loyalty == false}
        <div class="tw-py-5">
            <div class="tw-grid tw-grid-cols-12">
                <div class="tw-col-span-2">
                    <a
                        href="https://www.saksoff5th.com/c/hidden/content/loyalty-landing"
                        title="Go to more details about loyalty"
                    >
                        <img
                            alt="loyalty logo"
                            title="saks off 5th loyalty logo"
                            src="https://www.saksoff5th.com/on/demandware.static/-/Library-Sites-SaksOff5thSharedLibrary/default/dw8dff4bbf/images/loyalty/O5R.svg"
                        />
                    </a>
                </div>
                <div
                    class="tw-col-span-10 tw-pl-1 tw-text-left tw-font-normal tw-text-dark-gray tw-text-0"
                >
                    <span class="tw-font-medium tw-text-dark-gray tw-text-0"
                        >Join OFF 5TH Rewards today, it’s FREE!</span
                    >
                    Get 10% OFF this order and more.<br />

                    <!-- TODO: Update to button open loyalty popover -->
                    <a
                        class="tw-underline"
                        href="#0"
                        data-url="https://www.saksoff5th.com/on/demandware.store/Sites-SaksOff5th-Site/en_US/EmailSubscribe-GetContent"
                        >Sign Up Now</a
                    >
                    |

                    <a
                        class="tw-underline"
                        href="https://www.saksoff5th.com/c/hidden/content/loyalty-landing"
                        >Learn More</a
                    >
                </div>
            </div>
        </div>
    {/if}
</div>

<style global lang="postcss">
    #loyaltyPointsMessage {
        @apply tw-flow-root tw-text-accent tw-text-1;
    }
    #loyaltyPointsMessage .info-name {
        @apply tw-float-left;
    }
    #loyaltyPointsMessage .info-value {
        @apply tw-float-right;
    }
    .free-text,
    .free-text-shipping {
        @apply tw-text-1 tw-text-red tw-font-medium;
    }

    .cart-message {
        display: none;
    }
    .mini-cart-message {
        @apply tw-text-1 tw-text-dark-gray tw-font-medium tw-py-4 tw-px-1;
    }
</style>
