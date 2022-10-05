<script lang="ts">
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    } from '@rgossiaux/svelte-headlessui';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import Icon from '@ui/icon/Icon.svelte';
    import { default as cx } from 'classnames';
    export { classNames as class };
    export let label: string;
    export let url: string = '';
    export let categories = <any>[];
    export let level = 1;
    export let hexColor = '';

    let classNames = '';
    let containerClassnames = cx({
        'tw-border-b tw-border-oxygen': level === 1
    });
    let baseLabelClassnames = cx(
        'tw-text-left',
        'tw-w-full',
        'tw-block',
        'tw-relative'
    );
    let labelClassnames = {
        level1: cx(
            classNames,
            baseLabelClassnames,
            'tw-text-1',
            'tw-uppercase',
            'tw-font-medium',
            'tw-tracking-[1.5px]',
            'tw-p-4',
            'tw-max-w-sm',
            ''
        ),
        level2: cx(
            classNames,
            baseLabelClassnames,
            'tw-text-1',
            'tw-py-2',
            'tw-px-4',
            'tw-max-w-sm'
        ),
        level3: cx(
            classNames,
            baseLabelClassnames,
            'tw-text-1',
            'tw-py-2',
            'tw-pl-12',
            'tw-pr-6',
            'tw-max-w-sm'
        )
    };

    function getLabelClassnames(mobileNavigationLevel: number) {
        switch (mobileNavigationLevel) {
            case 1: {
                return labelClassnames.level1;
            }
            case 2: {
                return labelClassnames.level2;
            }
            case 3: {
                return labelClassnames.level3;
            }
        }
    }

    $: mobileNavigationLevel = level;
    $: customStyle = hexColor ? `color: ${hexColor};` : ``;
</script>

{#if label && categories && categories.length}
    {#if mobileNavigationLevel === 1}
        <Disclosure
            let:open
            data-testid="disclosure"
            class={containerClassnames}
            data-adobelaunchtopnavigation={label}
        >
            <DisclosureButton
                data-testid="disclosure-button"
                class={getLabelClassnames(mobileNavigationLevel)}
            >
                <span style={customStyle}>
                    {label}
                </span>
                <Icon
                    isOpen={open}
                    name="plus-minus"
                    class={cx('tw-right-4', 'tw-absolute-center-y', {
                        'tw-hidden': !categories.length
                    })}
                />
            </DisclosureButton>
            <DisclosurePanel class={cx('adobelaunch__subcategorymenu')}>
                {#each categories as category}
                    <svelte:self
                        url={category.url || undefined}
                        label={category.label || undefined}
                        categories={category.categories || undefined}
                        hexColor={category.hexColor || undefined}
                        level={mobileNavigationLevel + 1}
                    />
                {/each}
                {#if open}
                    <span class={cx('last-child', 'tw-block', 'tw-py-2')} />
                {/if}
            </DisclosurePanel>
        </Disclosure>
    {:else}
        <Disclosure
            let:open
            data-testid="disclosure"
            class={containerClassnames}
            data-adobelaunchsubcategory={label}
        >
            <DisclosureButton
                data-testid="disclosure-button"
                class={getLabelClassnames(mobileNavigationLevel)}
            >
                <span style={customStyle}>
                    {label}
                </span>
                <Icon
                    isOpen={open}
                    name="plus-minus"
                    class={cx('tw-right-4', 'tw-absolute-center-y', {
                        'tw-hidden': !categories.length
                    })}
                />
            </DisclosureButton>
            <DisclosurePanel class={cx('adobelaunch__subcategorymenu')}>
                {#each categories as category}
                    <svelte:self
                        url={category.url || undefined}
                        label={category.label || undefined}
                        categories={category.categories || undefined}
                        hexColor={category.hexColor || undefined}
                        level={mobileNavigationLevel + 1}
                    />
                {/each}
                {#if open}
                    <span class={cx('last-child', 'tw-block', 'tw-py-2')} />
                {/if}
            </DisclosurePanel>
        </Disclosure>
    {/if}
{:else if label && url}
    <Hyperlink
        variant="default"
        options={{
            href: url,
            label
        }}
        class={cx(getLabelClassnames(mobileNavigationLevel))}
        data-adobelaunchsubcategory={label}
    />
{/if}
