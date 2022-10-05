<script lang="ts">
    import type { INavLevelData } from '@components/header/IHeader';

    import {
        Popover,
        PopoverButton,
        PopoverPanel
    } from '@rgossiaux/svelte-headlessui';
    import Icon from '@ui/icon/Icon.svelte';
    import { toHyphenCase } from '@utilities/string';
    import { default as cx } from 'classnames';
    import getColumns from '../../utilities/getColumns';
    import HeaderNavLink from '../header-nav-link/HeaderNavLink.svelte';
    import HeaderNavMenuColumns from '../header-nav-menu/components/header-nav-menu-columns/HeaderNavMenuColumns.svelte';

    export let level1: INavLevelData;
    export let isFirst = false;
    export let isLast = false;
    export let sticky = false;
    export { classNames as class };

    let classNames = '';
    let toggleIconSize = 8;
    let containerElement: HTMLDivElement;
    let menuColumns = (level1 && getColumns(level1)) as [];
    let { tout, label, hexColor, icon, url } = level1;

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

    const onFocusIn = () => (focus = true);

    /**
     * Keydown events handle controlling the component with key strokes when the
     * component is in focus or is open.
     */
    const onFocusOut = (event: FocusEvent) =>
        (focus = !containerElement.contains(event.relatedTarget as Node)
            ? false
            : focus);
</script>

<Popover let:open class={cx('header-nav-menu-popover', classNames)}>
    <div
        class:focus
        class:open
        class={cx('header-nav-menu-popover-container')}
        bind:this={containerElement}
        on:mouseenter={e => onMouseEnter(e, open)}
        on:mouseleave={e => onMouseLeave(e, open)}
        on:mousedown={onMouseDown}
        on:focusout={onFocusOut}
    >
        <div
            on:focusin={onFocusIn}
            class={cx(
                `header-nav-menu-link-${toHyphenCase(label.toLowerCase())}`
            )}
            data-adobelaunchtopnavigation={label}
        >
            <HeaderNavLink
                {label}
                url={url || '#'}
                {hexColor}
                {icon}
                class={cx({
                    'first:tw-pr-8': isFirst,
                    'last:tw-pl-8': isLast
                })}
                isMenuOpen={open}
                sticky={!!sticky}
            />
        </div>

        <div class={cx('tw-relative')}>
            <PopoverButton
                on:focusin={onFocusIn}
                class={cx(
                    'tw-z-20',
                    'btn-toggle',
                    'tw-absolute',
                    '-tw-translate-x-2/4',
                    'tw-leading-[0]',
                    '-tw-mt-3',
                    `tw-w-[${toggleIconSize}px]`,
                    `tw-h-[${toggleIconSize}px]`,
                    {
                        'tw-sr-only': !focus,
                        'tw-left-1/2': !isFirst && !isLast,
                        'tw-left-1/3': isFirst,
                        'tw-right-1/3': isLast
                    }
                )}
            >
                <Icon
                    name="chevron"
                    width={toggleIconSize}
                    height={toggleIconSize}
                />
                <span class="tw-sr-only"> {`Expand ${label}`}</span>
            </PopoverButton>
        </div>
        <PopoverPanel
            class={cx(
                'tw-text-left',
                'tw-absolute',
                'tw-left-0',
                'tw-block',
                'tw-w-screen',
                'tw-left-2/4',
                '-tw-translate-x-2/4',
                'tw-bg-white',
                'tw-border-b',
                'tw-border-b-tin',
                'tw-py-6',
                'tw-z-40',
                'tw-max-h-[calc(100vh-100px)]',
                'tw-overflow-scroll',
                'adobelaunch__subcategorymenu'
            )}
        >
            <HeaderNavMenuColumns {tout} columns={menuColumns} />
        </PopoverPanel>
    </div>
</Popover>
