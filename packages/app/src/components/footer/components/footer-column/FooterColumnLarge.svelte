<script lang="ts">
    import { isDesktop } from '@stores/Breakpoint.store';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import { default as cx } from 'classnames';

    export let header: string;
    export let links: [] | any;
    export let index: number;

    let isOpen = false;
</script>

<div
    {...$$restProps}
    class={cx(
        `footer-column-large footer-column-${index} tw-hidden lg:tw-block
        } `
    )}
    aria-hidden={!$isDesktop}
>
    <h2 id="FooterColumnLarge{index}">
        <span
            class={cx(
                'footer-column-title',
                'tw-relative',
                'tw-font-medium',
                'tw-text-4',
                'tw-py-3',
                'tw-block',
                'tw-w-full',
                'tw-text-left'
            )}
        >
            {header}
        </span>
    </h2>

    <ul aria-labelledby="FooterColumnLarge{index}">
        {#each links as link, i}
            <li class="last:tw-pb-3">
                <Hyperlink
                    variant="default"
                    options={link}
                    class={cx(
                        'footer-link',
                        'tw-text-2',
                        'tw-py-1',
                        link.className
                    )}
                />
            </li>
        {/each}
    </ul>
</div>
