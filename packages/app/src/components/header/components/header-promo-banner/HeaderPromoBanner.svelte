<script lang="ts">
    import '@splidejs/splide/dist/css/splide.min.css';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { default as cx } from 'classnames';

    /**
     * These values are set to ensure the header stickys correctly regardless of the
     * height of the promo's carousel.
     *
     * TODO: Check if the promo content has a character limit to ensure content is
     * not cut off or overflowing.
     */
    const fixedHeight = 'tw-h-[65px] lg:tw-h-[40px]';

    let containerClasses = cx(
        'header-promo-banner',
        'tw-block',
        'tw-w-full',
        'tw-text-center',
        'tw-relative',
        'tw-w-full',
        'tw-z-10',
        fixedHeight
    );
    let bannerContainerClasses = cx(
        'tw-text-dark-gray',
        'tw-bg-oxygen',
        'tw-w-full',
        'tw-p-2',
        'tw-text-2',
        fixedHeight,
        'lg:tw-fixed',
        'lg:tw-top-0'
    );
    let bannerClasses = cx(
        'tw-max-w-screen-lg',
        'tw-w-full',
        'tw-mx-auto',
        'tw-absolute-center'
    );
    let spacerClasses = cx('tw-hidden lg:tw-block', 'tw-relative', fixedHeight);
    let slideClasses = cx('tw-block', 'tw-w-[80%]', 'tw-mx-auto');

    const options = {
        type: 'loop',
        pagination: false,
        autoplay: true
    };
</script>

<div class={containerClasses}>
    <div class={bannerContainerClasses}>
        <div class={bannerClasses}>
            <Splide {options}>
                <SplideSlide>
                    <div class={slideClasses}>Promo slide 1 TBD...</div>
                </SplideSlide>
                <SplideSlide>
                    <div class={slideClasses}>Promo slide 2 TBD...</div>
                </SplideSlide>
                <SplideSlide>
                    <div class={slideClasses}>
                        Promo slide 3 TBD... <b>FREE SHIPPING</b> on $99 with
                        code
                        <b>SHIP99</b>
                        |
                        <a
                            href="http://saksoff5th.com"
                            class="activate-modal tw-underline"
                            data-modal-id="this-is-the-id"
                            tabindex="-1"><b>DETAILS</b></a
                        >
                    </div>
                </SplideSlide>
                <SplideSlide class={slideClasses} />
            </Splide>
        </div>
    </div>

    <!-- The HeaderPromoBanner is fixed on desktop so a spacer element is used to maintain smooth scrolling. -->
    <div class={spacerClasses} />
</div>
