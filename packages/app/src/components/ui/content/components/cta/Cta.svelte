<script lang="ts">
    import { default as cx } from 'classnames';
    export let cta: [
        { label: string; href: string; className: string; srLabel?: string }
    ];

    let evenCta: any;
    let lastOddCta: any;
    let ctaLength: number = cta.length;

    if (ctaLength % 2 === 0) {
        evenCta = cta.slice();
    } else {
        evenCta = cta.slice(0, ctaLength - 1);
        lastOddCta = cta.slice(ctaLength - 1)[0];
    }
</script>

<div class="tw-grid tw-place-content-center lg:tw-relative">
    {#if evenCta}
        <div class=" tw-grid tw-grid-cols-2 tw-gap-5">
            {#each evenCta as { label, href, className, srLabel }}
                <a
                    {href}
                    class={cx(
                        className,
                        'odd:tw-justify-self-end',
                        'even:tw-justify-self-start',
                        'tw-my-auto'
                    )}
                    aria-label={srLabel}
                >
                    {label}
                </a>
            {/each}
        </div>
    {/if}
    {#if lastOddCta}
        <div class="tw-grid tw-grid-cols-1 tw-gap-5 tw-mt-5">
            <a
                href={lastOddCta.href}
                class={lastOddCta.className}
                aria-label={lastOddCta.srLabel}
            >
                {lastOddCta.label}
            </a>
        </div>
    {/if}
</div>
