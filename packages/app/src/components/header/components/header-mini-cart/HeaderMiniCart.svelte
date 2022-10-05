<script lang="ts">
    import {
        Popover,
        PopoverButton,
        PopoverPanel
    } from '@rgossiaux/svelte-headlessui';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import Icon from '@ui/icon/Icon.svelte';
    import PopoverPanelContainer from '@ui/popover/PopoverPanelContainer.svelte';
    import axios from 'axios';
    import { default as cx } from 'classnames';
    import CartList from './components/CartList.svelte';
    import Checkout from './components/Checkout.svelte';
    let exampleData = { items: [] };
    let toggleIconSize = 8;
    let items_count = 0;
    let containerElement: HTMLDivElement;

    $: focus = false;

    const onMouseEnter = (event: MouseEvent, open: boolean) => {
        !open && items_count > 0 && triggerPopoverBtn();
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

    const onFocusIn = () => (focus = true);

    /**
     * Keydown events handle controlling the component with key strokes when the
     * component is in focus or is open.
     */
    const onFocusOut = (event: FocusEvent) =>
        (focus = !containerElement.contains(event.relatedTarget as Node)
            ? false
            : focus);
    const onMouseOver = async (event: MouseEvent, open: boolean) => {
        const response = await axios.get('/get-cart', {
            withCredentials: true
        });
        items_count = response.data.items.length;
        if (items_count == 0) console.log('No items in the Basket');
        exampleData = response.data;
    };
</script>

<Popover
    let:open
    class={cx('header-mini-cart', 'tw-inline-block', 'tw-relative')}
>
    <div
        class="bfx-tracking-url"
        data-bfx-trackingurl="OrderCreation-BFXOrderTrackingData"
    />
    <div
        class:focus
        class:open
        bind:this={containerElement}
        on:mouseenter={e => onMouseEnter(e, open)}
        on:mouseleave={e => onMouseLeave(e, open)}
        on:mousedown={onMouseDown}
        on:focusout={onFocusOut}
        on:mouseover={e => onMouseOver(e, open)}
        on:focus={() => {}}
    >
        <div on:focusin={onFocusIn}>
            <Hyperlink
                variant="icon"
                options={{
                    href: '#miniCart',
                    label: 'Go to the Cart',
                    icon: 'shopping-bag'
                }}
                class={cx('tw-p-2', 'tw-box-content')}
            />
            <!-- <Icon
                href="#miniCart"
                srLabel="Go to the Cart"
                name="shopping-bag"
                class={cx('tw-p-2', 'tw-box-content')}
            /> -->
        </div>
        <PopoverButton
            data-testid="mini-cart"
            class={cx(
                'tw-z-20',
                'btn-toggle',
                'tw-absolute',
                '-tw-translate-x-2/4',
                'tw-left-2/4',
                'tw-leading-[0]',
                `tw-w-[${toggleIconSize}px]`,
                `tw-h-[${toggleIconSize}px]`,
                { 'tw-sr-only': !focus }
            )}
        >
            <Icon
                name="chevron"
                width={toggleIconSize}
                height={toggleIconSize}
            />
            <span class="tw-sr-only">Toggle Mini Cart</span>
        </PopoverButton>

        <PopoverPanel
            class={cx(
                'tw-z-10',
                'tw-absolute',
                '-tw-right-1/4',
                'tw-p-4',
                '-tw-mr-3',
                'tw-whitespace-normal',
                {
                    'tw-mt-3': focus,
                    'tw-invisible': !open
                }
            )}
        >
            <PopoverPanelContainer
                data-testid="popover-menu"
                class="bfx-minicart-container adobelaunch_minicart_open"
            >
                <CartList items={exampleData.items} />
                <Checkout data={exampleData} />
            </PopoverPanelContainer>
        </PopoverPanel>
    </div>
</Popover>
