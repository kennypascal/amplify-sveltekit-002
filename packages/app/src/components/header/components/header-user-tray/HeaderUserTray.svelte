<script lang="ts">
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import Col from '@ui/layout/Col.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { default as cx } from 'classnames';
    import HeaderMiniCart from '../header-mini-cart/HeaderMiniCart.svelte';
    import HeaderAccount from './components/header-account/HeaderAccount.svelte';
    import HeaderBorderFree from './components/header-border-free/HeaderBorderFree.svelte';

    export { classNames as class };

    let classNames = '';
</script>

<div class={cx('tw-block tw-relative tw-px-4', classNames)}>
    <Row
        class="tw-grid-flow-col tw-justify-items-end tw-auto-cols-min tw-place-items-center"
    >
        <Col>
            <HeaderBorderFree />
        </Col>
        <Col class="">
            <HeaderAccount />
        </Col>
        <Col>
            <Hyperlink
                variant="icon"
                options={{
                    icon: 'location',
                    label: 'Store Locator',
                    href: 'http://locations.saksoff5th.com/?en-us?'
                }}
                class={cx('tw-p-2', 'tw-align-middle')}
            />
        </Col>
        <Col>
            <Hyperlink
                variant="icon"
                options={{
                    icon: 'heart-o',
                    label: 'Wishlist',
                    href: 'https://www.saksoff5th.com/wishlist'
                }}
                class={cx(
                    'tw-p-2',
                    'tw-align-middle',
                    'adobelaunch__headerfavorites'
                )}
            />
        </Col>
        <Col>
            <HeaderMiniCart />
        </Col>
    </Row>
</div>
