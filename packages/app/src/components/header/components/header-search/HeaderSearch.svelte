<script lang="ts">
    import Icon from '@ui/icon/Icon.svelte';
    import OffcanvasButton from '@ui/offcanvas/components/offcanvas-button/OffcanvasButton.svelte';
    import Offcanvas from '@ui/offcanvas/Offcanvas.svelte';
    import { default as cx } from 'classnames';
    import HeaderSearchButton from './components/header-search-button/HeaderSearchButton.svelte';
    import HeaderSearchInput from './components/header-search-input/HeaderSearchInput.svelte';

    export let as: 'icon' | 'input' = 'input';
    export { classNames as class };

    let classNames: string = '';
    let id = 'headerSearchOffcanvas';
</script>

<div class={cx('header-search', 'tw-block', 'tw-relative', classNames)}>
    <Offcanvas {id} position={'top'} useDefaultClose={false}>
        <!-- Slot Open -->
        <HeaderSearchButton {as} slot="open" />

        <!-- Slot Default -->
        <div
            class={cx(
                'tw-flex',
                'tw-w-full',
                'tw-max-w-screen-lg',
                'tw-py-12',
                'tw-px-4',
                'tw-mx-auto',
                'lg:tw-px-20',
                'lg:tw-py-24'
            )}
        >
            <form
                role="search"
                class={cx('tw-grow', 'tw-self-center', 'tw-pl-4')}
            >
                <div
                    class={cx(
                        'tw-text-center',
                        'tw-w-full',
                        'tw-min-h-min',
                        'tw-mx-auto'
                    )}
                >
                    <HeaderSearchInput class={cx()} />
                </div>
            </form>
            <!-- Custom Close: useDefaultClose={false} -->
            <OffcanvasButton as="close" class={cx('tw-p-2', 'tw-ml-2')}>
                <Icon name="close" />
                <span class="tw-sr-only">Close Search</span>
            </OffcanvasButton>
        </div>
    </Offcanvas>
</div>
