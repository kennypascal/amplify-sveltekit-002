<script lang="ts">
    import { default as cx } from 'classnames';
    import { updateContentClassNames } from '../../utilities/CreateAttributes';
    import Cta from '../cta/Cta.svelte';
    export let appJSON: {
        title: {
            label: string;
            className: string;
        };
        content: [
            {
                header: { label: string; className: string };
                image: { default: string };
                description: { label: string; className: string };
                promo: { label: string; className: string };
                disclaimer: { label: string; className: string };
                cta: [
                    {
                        label: string;
                        href: string;
                        className: string;
                        srLabel: string;
                    }
                ];
            }
        ];
    };

    updateContentClassNames(appJSON, 'HOME3UP');
</script>

<div
    class="content content-home-three-up container tw-mx-auto tw-px-4 tw-my-5 tw-max-w-screen-xl"
>
    <div class="lg:tw-relative">
        <h2 class={cx(appJSON.title.className, 'tw-pb-3 lg:tw-pt-6')}>
            {appJSON.title.label}
        </h2>
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-3.5">
            {#each appJSON.content as column}
                <div class="tw-grid tw-mx-auto lg:tw-place-content-start">
                    <img
                        src={column.image.default}
                        alt=""
                        class="tw-aspect-[4/5] tw-mx-auto"
                    />
                    <div class="md:tw-max-w-[500px] tw-py-3 lg:tw-py-6">
                        <h3 class={column.header.className}>
                            {column.header.label}
                        </h3>
                        {#if column.promo}
                            <p class={column.promo.className}>
                                {column.promo.label}
                            </p>
                        {/if}
                        {#if column.description}
                            <p class={column.description.className}>
                                {column.description.label}
                            </p>
                        {/if}
                        <Cta cta={column.cta} />
                        {#if column.disclaimer}
                            <p class={column.disclaimer.className}>
                                {column.disclaimer.label}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
