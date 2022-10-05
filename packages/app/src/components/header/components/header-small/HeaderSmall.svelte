<script lang="ts">
    import Col from '@ui/layout/Col.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { intersectionAPI } from '@utilities/intersection';
    import { default as cx } from 'classnames';
    import HeaderLogo from '../../components/header-logo/HeaderLogo.svelte';
    import HeaderMiniCart from '../../components/header-mini-cart/HeaderMiniCart.svelte';
    import HeaderNavMobile from '../../components/header-nav-mobile/HeaderNavMobile.svelte';
    import HeaderSearch from '../../components/header-search/HeaderSearch.svelte';

    let observer: { destroy(): void };
    let mobileNavBarElement: HTMLDivElement | null;
    let isStickyMobile: boolean = false;

    let containerClassnames = cx(
        'header-nav-bar-mobile',
        'tw-block',
        'tw-max-w-screen-xl',
        'lg:tw-hidden'
    );

    $: stickyContainerClassnames = cx(
        'header-nav-bar-mobile-stick',
        'tw-z-30',
        {
            'tw-fixed tw-top-0 tw-w-full': isStickyMobile
        }
    );

    $: stickySpacerClassnames = cx(
        'header-nav-bar-mobile-sticky-spacer',
        'tw-block',
        'tw-relative',
        { 'tw-hidden': !isStickyMobile },
        'lg:tw-hidden'
    );

    $: stickSpacerHeight = isStickyMobile
        ? mobileNavBarElement?.getBoundingClientRect().height
        : 0;

    function setIntersectionObserver(node: HTMLElement) {
        observer = intersectionAPI(node, {
            threshold: 1,
            rootMargin: `0px`,
            callback: onIntersectionChanged
        });

        return {
            destroy() {
                observer.destroy();
            }
        };
    }

    function onIntersectionChanged(entries: any[], node: HTMLElement) {
        entries.forEach(entry => {
            if (entry.target == mobileNavBarElement) {
                isStickyMobile = !entry.isIntersecting;
            }
        });
    }

    function onResize() {
        observer.destroy();
        setIntersectionObserver(mobileNavBarElement as HTMLElement);
    }
</script>

<svelte:window on:resize={onResize} />

<div
    bind:this={mobileNavBarElement}
    use:setIntersectionObserver
    class={containerClassnames}
>
    <div class={stickyContainerClassnames}>
        <Row class={cx('tw-grid-cols-3 tw-items-center tw-bg-white tw-p-2')}>
            <Col class="tw-text-left">
                <HeaderNavMobile />
            </Col>
            <Col class="tw-text-center">
                <HeaderLogo />
            </Col>
            <Col class="tw-text-right">
                <!-- Show / hide search icon when sticky -->
                <HeaderSearch
                    as="icon"
                    class={cx(
                        'tw-animate-fade-in',
                        'tw-inline-block',
                        'tw-m-2',
                        { 'tw-hidden': !isStickyMobile }
                    )}
                />
                <HeaderMiniCart />
            </Col>
        </Row>
        <!-- Show / hide search icon when sticky -->
        <HeaderSearch
            class={cx('tw-animate-fade-in', 'tw-p-2', {
                'tw-hidden': isStickyMobile
            })}
        />
    </div>
    <div
        class={stickySpacerClassnames}
        style={`height:${stickSpacerHeight}px`}
    />
</div>
