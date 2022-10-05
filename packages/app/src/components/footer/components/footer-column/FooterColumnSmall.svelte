<script lang="ts">
    import { isDesktop } from '@stores/Breakpoint.store';
    import Collapse from '@ui/collapse/Collapse.svelte';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import Icon from '@ui/icon/Icon.svelte';
    import { default as cx } from 'classnames';

    const toggleSection = () => (isOpen = !isOpen);

    export let header: string;
    export let links: [] | any;
    export let index: number;

    let isOpen = false;
</script>

<div
    {...$$restProps}
    class={cx(
        'footer-column-small',
        `footer-column-${index}`,
        'lg:tw-hidden',
        `${isOpen ? 'active' : 'collapsed'}`
    )}
    aria-hidden={!!$isDesktop}
>
    <h2 id="FooterColumnSmall{index}">
        <button
            class={cx(
                'footer-column-button',
                'tw-relative',
                'tw-font-medium',
                'tw-text-3',
                'tw-py-3',
                'tw-block',
                'tw-w-full',
                'tw-text-left',
                'lg:tw-text-4'
            )}
            id={`collapsible${index}`}
            aria-expanded={isOpen}
            on:click={() => toggleSection()}
        >
            {header}

            <Icon
                isOpen={!!isOpen}
                name={'plus-minus'}
                class={cx(
                    'tw-absolute-center-y',
                    'tw-pr-3',
                    'tw-right-0',
                    'tw-align-middle',
                    'lg:hidden'
                )}
            />
        </button>
    </h2>
    <Collapse {isOpen} role="region" aria-labelledby={`collapsible${index}`}>
        <ul aria-labelledby="FooterColumnSmall{index}">
            {#each links as link, i}
                <li class="last:tw-pb-3">
                    <Hyperlink
                        variant={link.variant || 'default'}
                        options={link}
                        class={cx(
                            'footer-link',
                            'tw-text-1',
                            'lg:tw-text-2',
                            'tw-py-1',
                            link.className
                        )}
                    />
                </li>
            {/each}
        </ul>
    </Collapse>
</div>
