<script lang="ts">
    import Container from '@ui/layout/Container.svelte';
    import ExampleBannerLarge from './components/ExampleBannerLarge.svelte';
    import ExampleBannerMedium from './components/ExampleBannerMedium.svelte';
    import ExampleBannerSkinny from './components/ExampleBannerSkinny.svelte';
    import ExampleCarouselHomeCategories from './components/ExampleCarouselHomeCategories.svelte';
    import ExampleContentBody from './components/ExampleContentBody.svelte';
    import ExampleEinsteinRecommender from './components/ExampleEinsteinRecommender.svelte';
    import ExampleHero from './components/ExampleHero.svelte';
    import ExampleHeroNav from './components/ExampleHeroNav.svelte';
    import ExampleHome2Up from './components/ExampleHome2Up.svelte';
    import ExampleHomeCascade from './components/ExampleHomeCascade.svelte';
    import ExampleHomeCategories from './components/ExampleHomeCategories.svelte';
    import ExampleHomeFourUpEditorial from './components/ExampleHomeFourUpEditorial.svelte';
    import ExampleHomeThreeUp from './components/ExampleHomeThreeUp.svelte';
    import ExampleHomeTwoXTwo from './components/ExampleHomeTwoXTwo.svelte';
    import ExampleImage from './components/ExampleImage.svelte';
    import ExampleOffcanvas from './components/ExampleOffcanvas.svelte';
    import ExampleProductCardSimple from './components/ExampleProductCardSimple.svelte';
    import ExampleProductFull from './components/ExampleProductFull.svelte';
    import ExampleStack from './components/ExampleStack.svelte';
    import ExampleHeroSlider from './components/ExampleHeroSlider.svelte';
</script>

<main id="maincontent">
    <Container>
        <ExampleContentBody />
        <ExampleHero />
        <br />
        <ExampleHeroNav />
        <br>
        <ExampleHeroSlider />
        <ExampleBannerLarge />
        <ExampleStack />
        <ExampleBannerSkinny />
        <ExampleCarouselHomeCategories />
        <ExampleHomeThreeUp />
        <ExampleHomeTwoXTwo />
        <ExampleHomeCascade />
        <ExampleHomeFourUpEditorial />
        <ExampleBannerMedium />
        <ExampleHome2Up />
        <div class="tw-bg-accent">
            <h1
                class="tw-text-white tw-text-6 tw-text-center tw-my-9 tw-font-sans"
            >
                Below here is WIP
            </h1>
        </div>
        <ExampleProductCardSimple />
        <ExampleProductFull />
        <ExampleHomeCategories />
        <ExampleEinsteinRecommender />
        <ExampleCarouselHomeCategories />
        <ExampleImage />
        <ExampleOffcanvas />
        <div class="tw-mx-auto tw-block tw-relative tw-text-center">
            <span class="tw-product-brand">Product Brand Sample Class</span>
            <span class="tw-product-name">Product Name Sample Class</span>
            <span class="tw-product-price">$100</span>
            <span class="tw-product-price-cut">$200</span>
            <span class="tw-product-discount">50%</span>
            <span class="tw-product-price-sale-final">Final Sale</span>
        </div>
    </Container>
</main>
