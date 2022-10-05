<script lang="ts">
    import { VITE_BASE_URL } from '@stores/api/creds';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import Icon from '@ui/icon/Icon.svelte';
    import Col from '@ui/layout/Col.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { default as cx } from 'classnames';
    import HeaderBorderFree from '../../header-user-tray/components/header-border-free/HeaderBorderFree.svelte';

    let rowClass = 'tw-border-b tw-border-tin';
    let linkClass = 'tw-p-[20px] tw-font-medium tw-text-1 tw-text-shadow';
</script>

<Col class="tw-bg-oxygen">
    <Row class={rowClass}>
        <!-- TODO: update to use name when user has cc-nx cookie -->
        <Hyperlink
            variant="default"
            options={{
                label: 'Welcome, Sign In',
                href: `${VITE_BASE_URL}/account/sign-in`
            }}
            class={cx(linkClass)}
        />
    </Row>
    <Row class={rowClass}>
        <Hyperlink
            variant="default"
            options={{
                label: 'Check Order Status',
                href: `${VITE_BASE_URL}/account/order-status`
            }}
            class={cx(linkClass)}
        />
    </Row>
    <Row class={rowClass}>
        <div class={cx('tw-flex', 'tw-gap-1', linkClass)}>
            <Icon name="heart" width="18" height="18" />
            <Hyperlink
                variant="default"
                options={{
                    label: 'Wishlist',
                    href: `${VITE_BASE_URL}/wishlist`
                }}
                class="adobelaunch__headerfavorites tw-pl-1"
            />
        </div>
    </Row>
    <Row class={cx(rowClass)}>
        <div class={cx('tw-flex', 'tw-gap-1', linkClass)}>
            <Icon name="location" width="18" height="18" />
            <Hyperlink
                variant="default"
                options={{
                    icon: 'location',
                    label: 'Store Locator',
                    href: 'http://locations.saksoff5th.com/?en-us?'
                }}
            />
        </div>
    </Row>
    <Row class={cx(rowClass, 'tw-py-[20px]', 'tw-px-[14px]', 'tw-flex')}>
        <HeaderBorderFree />
    </Row>
</Col>
