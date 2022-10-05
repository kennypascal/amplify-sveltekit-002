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
                image: { default: string };
                cta: [
                    {
                        label: string;
                        href: string;
                        className: string;
                    }
                ];
            }
        ];
    };

    updateContentClassNames(appJSON, 'HOME4UPE');
</script>

<div
    class="content content-home-four-up-editorial container tw-mx-auto tw-px-4 lg:tw-px-[40px] tw-py-[50px] lg:tw-py-[25px] tw-max-w-screen-xl"
>
    <div class="lg:tw-relative">
        <h2 class={appJSON.title.className}>
            {appJSON.title.label}
        </h2>
        <div class="tw-grid tw-place-content-center">
            <div
                class="tw-flex-auto tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-x-3.5 tw-gap-y-[27px] "
            >
                {#each appJSON.content as column}
                    <div class="tw-grid">
                        <img
                            src={column.image.default}
                            alt=""
                            class="tw-aspect-[4/5] tw-pb-[9px] lg:tw-pb-[0px]"
                        />
                        <div
                            class="tw-grid tw-place-content-center lg:tw-py-[25px]"
                        >
                            <div
                                class="tw-flex-auto tw-grid tw-grid-cols-1 -tw-mt-5"
                            >
                                <Cta cta={column.cta} />
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
