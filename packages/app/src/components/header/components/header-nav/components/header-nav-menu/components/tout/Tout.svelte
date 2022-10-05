<script lang="ts">
    import type { IToutComponentData } from '@components/header/IHeader';
    import Image from '@ui/image/Image.svelte';
    import { default as cx } from 'classnames';

    export let tout: IToutComponentData[];
</script>

{#if tout && tout.length}
    <ul class={cx('tw-flex', 'tw-gap-2')}>
        {#each tout as { c_contentInnavurllink, c_contentInnavscene7urllink, alt, c_contentTemplatesize }}
            {#if c_contentInnavurllink && c_contentInnavscene7urllink}
                <li
                    class={cx({
                        'tw-w-[240px]':
                            !c_contentTemplatesize ||
                            c_contentTemplatesize === '1X1' ||
                            c_contentTemplatesize !== '1X2',
                        'tw-w-[480px]':
                            c_contentTemplatesize &&
                            c_contentTemplatesize === '1X2'
                    })}
                >
                    <a
                        href={c_contentInnavurllink}
                        class={cx('tw-block', {
                            'tw-aspect-2/3': c_contentTemplatesize === '1X1'
                        })}
                    >
                        <Image
                            variant="default"
                            options={{
                                default: c_contentInnavscene7urllink,
                                alt: alt || '',
                                fadeIn: true,
                                dpr: { default: 1, tablet: 2, mobile: 4 }
                            }}
                        />
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
{/if}
