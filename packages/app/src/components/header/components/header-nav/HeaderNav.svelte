<script context="module">
    import { Amplify } from 'aws-amplify';
    import awsExports from 'aws-exports';
    Amplify.configure({ ...awsExports, ssr: true });

    import { session } from '$app/stores';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
</script>

<script lang="ts">
    import { desktopNav, filterCategories } from '@stores/Header.store';
    import Col from '@ui/layout/Col.svelte';
    import Container from '@ui/layout/Container.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { default as cx } from 'classnames';
    import HeaderLogo from '../header-logo/HeaderLogo.svelte';
    import HeaderMiniCart from '../header-mini-cart/HeaderMiniCart.svelte';
    import HeaderSearch from '../header-search/HeaderSearch.svelte';
    import HeaderAccount from '../header-user-tray/components/header-account/HeaderAccount.svelte';
    import HeaderNavMenu from './components/header-nav-menu/HeaderNavMenu.svelte';

    export let sticky: boolean = false;

    session.subscribe((navData: any) => {
        const data = navData.data.result
            .map((d: any) => filterCategories(d, true))
            .filter((el: any) => el);

        desktopNav.set(data);
    });
</script>

<div
    class={cx(
        'header-nav',
        'tw-block',
        'tw-relative',
        'tw-bg-white',
        'tw-text-center',
        'adobelaunch__topnavigationcontainer',
        'before:tw-absolute',
        'before:tw-border-y',
        'before:tw-border-y-tin',
        'before:tw-top-0',
        'before:tw-w-screen',
        'before:tw-left-2/4',
        'before:-tw-translate-x-2/4',
        'before:tw-p-0',
        'before:tw-m-0',
        'before:tw-h-full',
        { 'before:tw-border-t-oxygen': sticky }
    )}
>
    <Container xl class={cx('tw-mx-auto', 'tw-px-6')}>
        <Row as="flex">
            {#if sticky}
                <!-- 
                    When the header nav is STICKY:
                    ------------------------------
                    - The header logo is displayed and in line with the main navigation.
                -->
                <Col
                    class={cx(
                        'tw-grow',
                        'tw-relative',
                        'tw-mr-4',
                        'tw-w-[55px]',
                        'first:tw-grow-0',
                        'last:tw-grow-0'
                    )}
                >
                    <HeaderLogo
                        class={cx('tw-top-1/2', '-tw-translate-y-1/2')}
                    />
                </Col>
            {/if}
            {#each $desktopNav as level1, i}
                <Col class={cx('tw-grow', 'first:tw-grow-0', 'last:tw-grow-0')}>
                    <HeaderNavMenu
                        {level1}
                        isFirst={i === 0 && !sticky}
                        isLast={i === $desktopNav.length - 1 && !sticky}
                        {sticky}
                    />
                </Col>
            {/each}
            {#if !$desktopNav.length}
                <Col
                    class={cx(
                        'tw-grow',
                        'first:tw-grow-0',
                        'last:tw-grow-0',
                        'tw-py-3',
                        'tw-mx-auto'
                    )}
                >
                    TODO: FAILED TO GET CATEGORIES...
                </Col>
            {/if}
            {#if sticky}
                <!-- 
                    When the header nav is STICKY:
                    ------------------------------
                    - The header search button and is displayed in line with the main navigation.
                    - The header mini cart is displayed abnd in line with the main navigation.
                -->
                <Col class={cx('tw-grow', 'first:tw-grow-0', 'last:tw-grow-0')}>
                    <Row
                        as="flex"
                        class={cx(
                            'tw-justify-between',
                            'tw-align-niddle',
                            'tw-relative',
                            'tw-top-1/2',
                            '-tw-translate-y-1/2',
                            'tw-w-full',
                            'tw-w-[90px]',
                            'tw-float-right'
                        )}
                        data-testid={`level1-columns`}
                    >
                        <Col class={cx('tw-p-0')}>
                            <HeaderAccount class={cx('tw-sr-only')} />
                            <Hyperlink
                                variant="icon"
                                options={{
                                    icon: 'location',
                                    label: 'Store Locator',
                                    href: 'http://locations.saksoff5th.com/?en-us?'
                                }}
                                class={cx('tw-sr-only')}
                            />
                            <Hyperlink
                                variant="icon"
                                options={{
                                    icon: 'heart-o',
                                    label: 'Wishlist',
                                    href: 'https://www.saksoff5th.com/wishlist'
                                }}
                                class={cx(
                                    'tw-sr-only',
                                    'adobelaunch__headerfavorites'
                                )}
                            />
                        </Col>
                        <Col class={cx('tw-p-0')}>
                            <HeaderSearch as="icon" class="tw-p-2" />
                        </Col>
                        <Col>
                            <HeaderMiniCart />
                        </Col>
                    </Row>
                </Col>
            {/if}
        </Row>
    </Container>
</div>
