<script lang="ts">
    import Col from '@ui/layout/Col.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { default as cx } from 'classnames';
    import { fly } from 'svelte/transition';
    import HeaderNavMenuLink from '../../../header-nav-menu/components/header-nav-menu-link/HeaderNavMenuLink.svelte';
    import type IToutComponentData from '../tout/Tout.svelte';
    import Tout from '../tout/Tout.svelte';
    export let tout: IToutComponentData[];
    export let columns: Array<
        {
            hexColor: string | undefined;
            label: string;
            url: string;
            categories: {
                hexColor: string | undefined;
                label: string;
                url: string;
            }[];
        }[]
    >;
</script>

{#if columns.length}
    <Row as="flex" class={cx('tw-mx-auto', 'tw-max-w-screen-xl')}>
        {#each columns as column, i}
            <Col class={cx('tw-flex-1', 'tw-px-6')}>
                <ul in:fly={{ duration: 200, y: -4, opacity: 0 }}>
                    {#if column.length}
                        {#each column as level2}
                            <!-- Level 2-->
                            <li data-adobelaunchsubcategory={level2.label}>
                                <HeaderNavMenuLink
                                    label={level2.label}
                                    href={level2.url}
                                    hexColor={level2.hexColor}
                                    class={cx(
                                        'tw-relative',
                                        'tw-block',
                                        'tw-text-0',
                                        'tw-text-shadow',
                                        'tw-uppercase',
                                        'tw-tracking-[1.5px]',
                                        'tw-font-medium',
                                        {
                                            'hover:tw-underline': level2.url,
                                            'tw-mb-5': !level2.categories,
                                            'tw-mb-2': level2.categories
                                        }
                                    )}
                                />

                                {#if level2.categories}
                                    <ul>
                                        {#each level2.categories as level3, j}
                                            <!-- Level 3-->
                                            <li
                                                data-adobelaunchsubcategory={level3.label}
                                                class="last:tw-mb-6 first:tw-mt-2"
                                            >
                                                <HeaderNavMenuLink
                                                    label={level3.label}
                                                    href={level3.url}
                                                    hexColor={level3.hexColor}
                                                    class={cx(
                                                        'tw-text-1',
                                                        'tw-text-dark-gray',
                                                        'tw-mb-3',
                                                        'tw-block',
                                                        {
                                                            'hover:tw-underline':
                                                                level3.url
                                                        }
                                                    )}
                                                />
                                            </li>
                                        {/each}
                                    </ul>
                                {/if}
                            </li>
                        {/each}
                    {/if}
                </ul>
            </Col>
        {/each}
        <Col class="tw-hidden tw-px-6 lg:tw-block">
            <Tout {tout} />
        </Col>
    </Row>
{/if}
