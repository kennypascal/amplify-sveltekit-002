<script lang="ts">
    /**
     * HeaderNavLink displays a level 1 navigation link with optional custom colors.
     */

    import Icon from '@ui/icon/Icon.svelte';
    import { default as cx } from 'classnames';

    export { classNames as class };
    export let label: string;
    export let url = '';
    export let hexColor = '';
    export let icon = '';
    export let isMenuOpen: boolean = false;
    export let sticky = false;

    let classNames = '';

    $: isHover = false;
    $: customStyle = hexColor
        ? {
              style: `color: ${hexColor}; border-bottom-color: ${
                  isHover || isMenuOpen ? hexColor : 'transparent'
              }`
          }
        : {};
</script>

<a
    href={url}
    class={cx('header-nav-link', 'tw-block', 'tw-relative', classNames)}
    on:mouseenter={() => (isHover = true)}
    on:mouseleave={() => (isHover = false)}
>
    <span
        class={cx(
            'tw-whitespace-nowrap',
            'tw-uppercase',
            'tw-font-medium',
            'tw-tracking-[1.5px]',
            'tw-inline-block',
            'tw-relative',
            'tw-py-3',
            'tw-border-b-2',
            'tw-border-b-transparent',
            {
                'tw-text-1': !sticky,
                'tw-text-0': sticky,
                'tw-border-b-accent': (isHover || isMenuOpen) && !hexColor
            }
        )}
        {...customStyle}
    >
        <!-- TODO: Determine if icons will be needed for level 1 navigation links. -->
        {#if icon}
            <Icon
                name={icon}
                class={cx(
                    'tw-align-middle',
                    'tw-float-left',
                    'tw-mr-2',
                    '-tw-mt-1'
                )}
            />
        {/if}

        {label}
    </span>
</a>
