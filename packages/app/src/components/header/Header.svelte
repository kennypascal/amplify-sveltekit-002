<script lang="ts">
    import { default as cx } from 'classnames';
    import HeaderLarge from './components/header-large/HeaderLarge.svelte';
    import HeaderPromoBanner from './components/header-promo-banner/HeaderPromoBanner.svelte';
    import HeaderSkip from './components/header-skip/HeaderSkip.svelte';
    import HeaderSmall from './components/header-small/HeaderSmall.svelte';

    /**
     * We await the 'tick' so that the header can position the DOM elements
     * and provide the correct offset values for the nav sticky position.
     */
    // onMount(async () => {
    //     await tick();
    // });
</script>

<header
    {...$$restProps}
    id="headercontent"
    class={cx(
        '[&>*]:tw-z-[30]',
        'tw-z-30',
        'tw-block',
        'tw-w-full',
        'tw-bg-white'
    )}
>
    <HeaderSkip />
    <HeaderPromoBanner />
    <!-- For mobile (SM) screens only -->
    <HeaderSmall />
    <!-- For desktop (LG) screens only -->
    <HeaderLarge />
</header>
