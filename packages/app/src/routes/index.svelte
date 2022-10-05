<script lang="ts">
    import JsonLdSchema from '@components/assets/JsonLdSchema.svelte';

    import HomePageContent from '../components/main-content/home-page-content/HomePageContent.svelte';
    import { VITE_BASE_URL } from './../stores/api/creds';
    import DataLayerGlobal from '@components/assets/DataLayerGlobal.svelte';
    import DataLayerPage from '@components/assets/DataLayerPage.svelte';

    let jsonldOrg = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: `${VITE_BASE_URL}`,
        logo: `${VITE_BASE_URL}/on/demandware.static/-/Library-Sites-SaksOff5thSharedLibrary/default/dw252f4fa3/images/saksoff_5th_logo.svg`
    };
    let jsonldWebsite = {
        '@context': 'http://www.schema.org',
        '@type': 'WebSite',
        name: 'Saks Off 5TH',
        url: `${VITE_BASE_URL}`,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${VITE_BASE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        },
        sameAs: [
            'https://in.pinterest.com/saksoff5th',
            'https://www.facebook.com/saksoff5th',
            'https://www.instagram.com/saksoff5th',
            'https://www.tiktok.com/@saksoff5th',
            'https://www.linkedin.com/company/saksoff5th/'
        ]
    };
</script>

<svelte:head>
    <meta
        name="description"
        content="Discover discount designer clothing, handbags, and more at saksoff5th.com. Save up to 70% off everything with free shipping on orders of $99 or more."
    />

    <meta
        property="og:title"
        content="Saks OFF 5TH : Discount Designer Women's Clothing, Handbags &amp;amp; More"
    />
    <meta property="og:url" content={VITE_BASE_URL} />
    <meta
        property="og:description"
        content="Discover discount designer clothing, handbags, and more at saksoff5th.com. Save up to 70% off everything with free shipping on orders of $99 or more."
    />
    <title>
        Saks OFF 5TH : Discount Designer Women's Clothing, Handbags &amp; More
    </title>

    <link rel="canonical" href={VITE_BASE_URL} />
</svelte:head>

<DataLayerGlobal />
<DataLayerPage />
<JsonLdSchema jsonld={jsonldOrg} />
<JsonLdSchema jsonld={jsonldWebsite} />
<HomePageContent />
