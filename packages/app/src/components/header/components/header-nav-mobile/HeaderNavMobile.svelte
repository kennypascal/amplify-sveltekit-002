<script context="module">
    import { session } from '$app/stores';
    import Icon from '@ui/icon/Icon.svelte';
</script>

<script lang="ts">
    import { filterCategories, mobileNav } from '@stores/Header.store';
    import OffcanvasButton from '@ui/offcanvas/components/offcanvas-button/OffcanvasButton.svelte';
    import Offcanvas from '@ui/offcanvas/Offcanvas.svelte';
    import { default as cx } from 'classnames';
    import HeaderNavMobileItem from './components/HeaderNavMobileItem.svelte';
    import HeaderNavMobileUserTray from './components/HeaderNavMobileUserTray.svelte';

    session.subscribe((navData: any) => {
        const data = navData.data.result
            .map((d: any) => filterCategories(d, false))
            .filter((el: any) => el);
        mobileNav.set(data);
    });
</script>

<div class={cx('header-nav-mobile', 'tw-block', 'tw-relative')}>
    <Offcanvas id="headerNavMobileOffcanvas">
        <!-- Slot Open -->
        <OffcanvasButton slot="open" class="tw-float-left">
            <Icon name="hamburger" />
            <span class="tw-sr-only">Open Menu</span>
        </OffcanvasButton>

        <!-- Slot Default -->
        <div
            class={cx(
                'header-mobile-nav-item-container',
                'adobelaunch__topnavigationcontainer',
                'tw-inline-block',
                'tw-w-80'
            )}
        >
            {#each $mobileNav as mobileNavitem}
                <HeaderNavMobileItem
                    label={mobileNavitem.label || ''}
                    categories={mobileNavitem.categories || []}
                    url={mobileNavitem.url || ''}
                    hexColor={mobileNavitem.hexColor || ''}
                />
            {/each}
        </div>
        <HeaderNavMobileUserTray />
    </Offcanvas>
</div>
