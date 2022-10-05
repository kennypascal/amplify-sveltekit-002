<script lang="ts">
    import {
        Dialog,
        DialogDescription,
        DialogOverlay,
        DialogTitle,
        Transition,
        TransitionChild
    } from '@rgossiaux/svelte-headlessui';
    import { default as cx } from 'classnames';
    import Icon from '../icon/Icon.svelte';
    import OffcanvasButton from './components/offcanvas-button/OffcanvasButton.svelte';
    import OffcanvasProvider from './components/offcanvas-provider/OffcanvasProvider.svelte';
    import OffcanvasSlotContent from './components/offcanvas-slot-content/OffcanvasSlotContent.svelte';
    import type { IOffcanvasPosition } from './IOffcanvas';

    export let id: string;
    export let position: IOffcanvasPosition = 'left';
    export let useDefaultClose = true;

    /** The display is set differently for animation purposes. */
    let transitionAttributeClasses = {
        class: cx('tw-relative', 'tw-bg-white', {
            'tw-block': position === 'top',
            'tw-inline-block tw-h-screen': position === 'left',
            'tw-inline-block tw-h-fit tw-mx-auto tw-p-2': position === 'center'
        })
    };

    /** Sets the transition animation for the various positions. */
    let transitionAttributes = {
        left: {
            ...transitionAttributeClasses,
            enter: 'tw-ease-in-out tw-duration-300',
            enterFrom: '-tw-ml-[100%]',
            enterTo: 'tw-ml-0',
            leave: 'tw-ease-out tw-duration-300',
            leaveFrom: 'tw-ml-0',
            leaveTo: '-tw-ml-[100%]'
        },
        top: {
            ...transitionAttributeClasses,
            enter: 'tw-ease-in-out tw-duration-300',
            enterFrom: '-tw-mt-[100%]',
            enterTo: 'tw-mt-0',
            leave: 'tw-ease-out tw-duration-300',
            leaveFrom: 'tw-mt-0',
            leaveTo: '-tw-mt-[100%]'
        },
        center: {
            ...transitionAttributeClasses,
            enter: 'tw-ease-in-out tw-duration-300',
            enterFrom: 'tw-mt-[20%] tw-opacity-0',
            enterTo: 'tw-mt-0 tw-opacity-100',
            leave: 'tw-ease-out tw-duration-300',
            leaveFrom: 'tw-mt-0 tw-opacity-100',
            leaveTo: 'tw-mt-[20%] tw-opacity-0'
        }
    };

    /** Sets the transition fade in animation for the content. */
    let transitionFadeAttributes = {
        enter: 'tw-ease-in-out tw-duration-300',
        enterFrom: 'tw-opacity-0',
        enterTo: 'tw-opacity-100',
        leave: 'tw-ease-in-out tw-duration-300',
        leaveFrom: 'tw-opacity-100',
        leaveTo: 'tw-opacity-0'
    };

    let dialogAttributes = {
        class: cx(
            'tw-fixed',
            'tw-top-0',
            'tw-left-0',
            'tw-w-screen',
            'tw-h-screen',
            'tw-m-0',
            'tw-z-40',
            { 'tw-grid tw-content-center': position === 'center' }
        )
    };

    let dialogOverlayAttributes = {
        class: cx(
            'tw-fixed',
            'tw-top-0',
            'tw-left-0',
            'tw-w-screen',
            'tw-h-screen',
            'tw-bg-black',
            'tw-bg-opacity-50'
        )
    };
</script>

<div class="offcanvas" {...$$restProps}>
    <OffcanvasProvider
        {id}
        {position}
        {useDefaultClose}
        let:offCanvasIsOpenCtx={isOpen}
        let:offCanvasToggleCtx={toggle}
    >
        <slot name="open" as="open">
            <OffcanvasButton>Open Modal</OffcanvasButton>
        </slot>
        <Transition show={isOpen}>
            <Dialog
                {...dialogAttributes}
                open={isOpen}
                on:close={() => toggle(false)}
            >
                <TransitionChild {...transitionFadeAttributes}>
                    <DialogOverlay {...dialogOverlayAttributes} />
                    <DialogTitle as="h1">
                        <span class="tw-sr-only">{id}</span>
                    </DialogTitle>
                    <DialogDescription>
                        <span class="tw-sr-only">{id}</span>
                    </DialogDescription>
                </TransitionChild>
                <TransitionChild
                    {...transitionAttributes[position]}
                    unmount={false}
                >
                    <!-- Close -->
                    {#if useDefaultClose}
                        <slot name="close" as="close">
                            <OffcanvasButton as="close" slot="close">
                                <Icon name="close" />
                                <span class="tw-sr-only">Close Menu</span>
                            </OffcanvasButton>
                        </slot>
                    {/if}
                    <!-- Default Slot Content -->
                    <OffcanvasSlotContent>
                        <slot />
                    </OffcanvasSlotContent>
                </TransitionChild>
            </Dialog>
        </Transition>
    </OffcanvasProvider>
</div>
