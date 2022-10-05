<script lang="ts">
    import AdobeLaunchScript from '@components/assets/AdobeLaunchScript.svelte';
    import BfxScript from '@components/assets/bfxScript.svelte';
    import DataLayer from '@components/assets/DataLayer.svelte';
    import OptimizelyScript from '@components/assets/OptimizelyScript.svelte';
    import RiskifiedBeacon from '@components/assets/RiskifiedBeacon.svelte';
    import YottaaScript from '@components/assets/yottaaScript.svelte';
    import MediaQuery from '@ui/media-query/MediaQuery.svelte';
    import { onMount } from 'svelte';
    import Footer from '../components/footer/Footer.svelte';
    import Header from '../components/header/Header.svelte';
    import '../css/app.css';

    import { Amplify } from 'aws-amplify';
	import awsExports from 'aws-exports';
	Amplify.configure({ ...awsExports, ssr: true });

    onMount(() => {
        if (import.meta.env.DEV) {
            import('agnostic-axe').then(({ AxeObserver, logViolations }) =>
                new AxeObserver(logViolations).observe(document)
            );
        }
    });
</script>

<RiskifiedBeacon />
<YottaaScript />
<OptimizelyScript />
<AdobeLaunchScript />
<Header />
<slot />
<Footer />
<MediaQuery />
<DataLayer />
