<script lang="ts">
    import Icon from '@ui/icon/Icon.svelte';
    import OffcanvasButton from '@ui/offcanvas/components/offcanvas-button/OffcanvasButton.svelte';
    import { default as cx } from 'classnames';

    export let as: 'input' | 'icon' = 'icon';
    export { classNames as class };

    let classNames = '';
</script>

{#if as === 'input'}
    <OffcanvasButton
        class={cx('tw-text-center', 'tw-w-full', 'tw-mx-auto', classNames)}
    >
        <span
            class={cx(
                'tw-border',
                'tw-border-tin',
                'tw-text-mid-gray',
                'tw-py-1',
                'tw-px-2',
                'tw-block',
                'tw-text-left',
                'tw-text-0',
                'tw-cursor-text'
            )}
        >
            <Icon
                name="search-o"
                class={cx(
                    classNames,
                    'tw-mr-1',
                    'tw-opacity-50',
                    'tw-align-middle'
                )}
                width={14}
            />
            <span class="tw-align-middle"> Search </span>
        </span>
    </OffcanvasButton>
{:else}
    <OffcanvasButton as="open" class={cx(classNames, 'tw-align-middle', '')}>
        <Icon name="search-o" />
        <span class="tw-sr-only">Open Search</span>
    </OffcanvasButton>
{/if}
