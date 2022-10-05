<script lang="ts">
    import {
        Popover,
        PopoverButton,
        PopoverPanel
    } from '@rgossiaux/svelte-headlessui';
    import Button from '@ui/button/Button.svelte';
    import PopoverPanelContainer from '@ui/popover/PopoverPanelContainer.svelte';
    import { default as cx } from 'classnames';

    export { classNames as class };

    let classNames = '';
    let containerElement: HTMLDivElement;

    $: focus = false;

    const onMouseEnter = (event: MouseEvent, open: boolean) => {
        !open && triggerPopoverBtn();
    };
    const onMouseLeave = (event: MouseEvent, open: boolean) => {
        open && triggerPopoverBtn();
    };

    const triggerPopoverBtn = () => {
        let popoverBtnElement = containerElement.querySelector(
            '.btn-toggle'
        ) as HTMLButtonElement;
        if (popoverBtnElement) {
            /** Simulates a click to toggle the popover. */
            popoverBtnElement.click();
            /** Removes focus caused by click() method. */
            popoverBtnElement.blur();
        }
    };

    /**
     * In order to prevent focus on mousedown events we suppress the default bahavior
     * so the indicator button does not appear when clicking.
     */
    const onMouseDown = (event: MouseEvent) => event.preventDefault();

    /**
     * Keydown events handle controlling the component with key strokes when the
     * component is in focus or is open.
     */
    const onFocusOut = (event: FocusEvent) =>
        (focus = !containerElement.contains(event.relatedTarget as Node)
            ? false
            : focus);
</script>

<Popover
    let:open
    class={cx('header-account', 'tw-inline-block', 'tw-relative', classNames)}
>
    <div
        class:focus
        class:open
        bind:this={containerElement}
        on:mouseenter={e => onMouseEnter(e, open)}
        on:mouseleave={e => onMouseLeave(e, open)}
        on:mousedown={onMouseDown}
        on:focusout={onFocusOut}
        data-testid="sign-in"
    >
        <PopoverButton class={cx('btn-toggle', 'tw-py-2', 'tw-px-2')}>
            <span class={cx('tw-whitespace-nowrap', 'tw-text-shadow')}>
                Welcome, Sign In
            </span>
        </PopoverButton>

        <PopoverPanel
            class={cx(
                'tw-z-10',
                'tw-absolute',
                'tw-right-0',
                'tw-p-4',
                '-tw-mr-3',
                'tw-whitespace-normal',
                {
                    'tw-mt-3': focus,
                    'tw-invisible': !open
                }
            )}
            data-testid="popover-menu"
        >
            <PopoverPanelContainer>
                <p class="tw-pb-4">
                    Save to Wishlist, Easily Track Orders & Enjoy a Faster
                    Checkout
                </p>
                <div class="tw-pb-4">
                    <Button
                        variant="primary"
                        size="sm"
                        block={true}
                        options={{ label: 'Sign In' }}
                    />
                </div>
                <div class="tw-pb-4">
                    <Button
                        variant="secondary"
                        size="sm"
                        block={true}
                        options={{ label: 'Create an Account' }}
                    />
                </div>
                <div class="tw-pb-4 tw-underline">
                    <a href="#links1">
                        <span>Check Order Status</span>
                    </a>
                </div>
                <div class="tw-pb-4 tw-underline">
                    <a href="#links2">
                        <span>My Store: BERGEN</span>
                    </a>
                </div>
            </PopoverPanelContainer>
        </PopoverPanel>
    </div>
</Popover>
