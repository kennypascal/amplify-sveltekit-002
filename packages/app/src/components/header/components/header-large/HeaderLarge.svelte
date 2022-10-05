<script lang="ts">
    import Col from '@ui/layout/Col.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { default as cx } from 'classnames';
    import { intersectionAPI } from '../../../../utilities/intersection';
    import HeaderLogo from '../../components/header-logo/HeaderLogo.svelte';
    import HeaderNav from '../../components/header-nav/HeaderNav.svelte';
    import HeaderSearch from '../../components/header-search/HeaderSearch.svelte';
    import HeaderUserTray from '../../components/header-user-tray/HeaderUserTray.svelte';

    let desktopNavBarElement: HTMLDivElement | null;
    let isStickyDesktop = false;
    let topOffset: string;
    let observer: { destroy(): void };

    let containerClassnames = cx(
        'header-nav-bar-desktop',
        'tw-bg-white',
        'tw-mt',
        'tw-max-w-screen-xl',
        'tw-mx-auto',
        'tw-hidden',
        'lg:tw-block'
    );

    $: stickyContainerClassnames = cx(
        'header-nav-bar-desktop-sticky',
        'tw-z-30',
        'tw-w-full',
        'tw-mx-auto',
        {
            [`tw-fixed tw-w-full tw-left-0`]: isStickyDesktop
        }
    );

    $: stickySpacerClassnames = cx(
        'header-nav-bar-mobile-sticky-spacer',
        'tw-block',
        'tw-relative',
        { 'tw-hidden': !isStickyDesktop }
    );

    $: stickSpacerHeight = isStickyDesktop
        ? Math.round(desktopNavBarElement?.getBoundingClientRect().height || 0)
        : 0;

    function getRootMargin() {
        let d = document.querySelector('.header-nav-bar-desktop-sticky');
        let n = document.querySelector('.header-nav');
        let p = document.querySelector('.header-promo-banner');

        let pHeight = (p && p?.getBoundingClientRect().height) || 0;
        let dHeight = (d && d?.getBoundingClientRect().height) || 0;
        let nHeight = (n && n?.getBoundingClientRect().height) || 0;

        return Math.round(dHeight - nHeight - pHeight);
    }

    function setIntersectionObserver(node: HTMLElement) {
        observer = intersectionAPI(node, {
            threshold: 1,
            rootMargin: `${getRootMargin()}px`,
            callback: onIntersectionChanged,
            isDektop: true
        });

        return {
            destroy() {}
        };
    }

    function onIntersectionChanged(entries: any[], node: HTMLElement) {
        entries.forEach(entry => {
            if (entry.target == desktopNavBarElement) {
                isStickyDesktop = !entry.isIntersecting;
                topOffset = `-${getRootMargin()}px`;
            }
        });
    }

    function onResize() {
        observer.destroy();
        setIntersectionObserver(desktopNavBarElement as HTMLElement);
        topOffset = `-${getRootMargin()}px`;
    }
</script>

<svelte:window on:resize={onResize} />

<div
    bind:this={desktopNavBarElement}
    use:setIntersectionObserver
    class={containerClassnames}
>
    <div
        class={stickyContainerClassnames}
        style:top={isStickyDesktop ? topOffset : ''}
    >
        <Row class={'tw-items-center lg:tw-grid-cols-3 lg:tw-pt-4 tw-mx-auto'}>
            <Col class="tw-text-left">
                <!-- Logo -->
                <HeaderLogo
                    class={cx('tw-px-6', {
                        'tw-invisible': isStickyDesktop
                    })}
                />
            </Col>
            <Col class="tw-text-center">
                <!-- Search-->
                <HeaderSearch
                    class={cx('tw-px-6', {
                        'tw-invisible': isStickyDesktop
                    })}
                />
            </Col>
            <Col class="tw-justify-self-end">
                <!-- User Tray (Border Free, Account Sign In, Store Locator, Wishlist)-->
                <HeaderUserTray
                    class={cx('tw-px-6', 'tw-invisible', {
                        'lg:tw-visible': !isStickyDesktop
                    })}
                />
                <!-- Mini Cart-->
            </Col>
            <Col class="tw-col-span-12  tw-mt-4 ">
                <!-- Navigation (Desktop)-->
                <HeaderNav sticky={!!isStickyDesktop} />
            </Col>
        </Row>
    </div>
    <div
        class={stickySpacerClassnames}
        style={`height:${stickSpacerHeight}px`}
    />
</div>
