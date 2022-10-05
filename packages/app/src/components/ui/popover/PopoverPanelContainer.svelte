<script lang="ts">
    /**
     * Popover Panel Container provides the styling and animation for the
     * PopoverPanel content (borders, background, arrow, etc).
     */
    import { default as cx } from 'classnames';
    import { fly } from 'svelte/transition';

    let borderColor = 'black';
</script>

<div
    transition:fly={{ duration: 100, y: -4, opacity: 0 }}
    data-testid="container"
    class={cx(
        'popover-panel-container',
        'tw-relative',
        'tw-block',
        'tw-text-center',
        'tw-bg-white',
        'tw-w-[240px]',
        'tw-border',
        `tw-border-${borderColor}`,
        'tw-p-4',
        'after:tw-absolute',
        'after:tw-content-none;',
        'after:tw-w-[20px]',
        'after:tw-h-[20px]',
        'after:tw-bg-white',
        'after:tw-border',
        `after:tw-border-t-${borderColor}`,
        `after:tw-border-l-${borderColor}`,
        'after:tw-border-b-transparent',
        'after:tw-border-r-transparent',
        'after:tw-top-[-10px]',
        'after:tw-right-4',
        'after:tw-rotate-45'
    )}
>
    <slot />
</div>
