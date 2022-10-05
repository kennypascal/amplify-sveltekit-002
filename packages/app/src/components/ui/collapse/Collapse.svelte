<script lang="ts">
    import {
        Disclosure,
        DisclosurePanel,
        Transition
    } from '@rgossiaux/svelte-headlessui';

    export let isOpen = false;
</script>

<Disclosure {...$$restProps}>
    <Transition
        show={isOpen}
        enter="tw-transition tw-duration-100 tw-ease-out"
        enterFrom="tw-transform -tw-translate-y-1 tw-opacity-0"
        enterTo="tw-transform tw-translate-y-0 tw-opacity-100"
        leave="tw-transition tw-duration-75 tw-ease-out"
        leaveFrom="tw-transform tw-translate-y-0 tw-opacity-100"
        leaveTo="tw-transform -tw-translate-y-1 tw-opacity-0"
    >
        {#if isOpen}
            <div>
                <DisclosurePanel static>
                    <slot />
                </DisclosurePanel>
            </div>
        {/if}
    </Transition>
</Disclosure>
