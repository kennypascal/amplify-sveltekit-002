<script context="module">
	import 'sveltekit-ui/style.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import AuthTrigger from '$lib/components/Auth/AuthTrigger/index.svelte';
	import { Amplify } from 'aws-amplify';
	import awsExports from 'aws-exports';
	Amplify.configure({ ...awsExports, ssr: true });
	import { initAuth } from '$lib/components/Auth/store';
	initAuth();
</script>

<script>
  import AuthModal from '$lib/components/Auth/AuthModal/index.svelte';
	import Logo from '$lib/assets/static/Logo/index.svelte';
	import { Layout } from 'sveltekit-ui';  
  import { 
    isDarkTheme, 
    screenWidth, 
    screenHeight, 
    screenWidthThreshold, 
    isSmallScreen, 
    isAppScreen,
    isApp,
    isAllNavBarHidden,
    isNavBarHidableFromScroll,
    isNavBarHiddenFromScroll,
    isNavBarShown,
    isFullNavPrevented,
    isFullNavToggledOn,
    isFullNavShown,
    navBarHeight,
    shownNavBarHeight,
    availableContentHeight
  } from "$lib/store"

	const fullNavLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Settings', path: '/settings' }
	];

	const appFullNavLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Settings', path: '/settings' }
	];

	const navBarLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Settings', path: '/settings' }
		// { name: 'Settings', path: '/settings', subLinks: [
		//   { name: 'Profile', path: '/profile' },
		// ]},
	];

	const appNavBarLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Settings', path: '/settings' }
	];

</script>

<Layout 
  {fullNavLinks}
  {appFullNavLinks}
  {navBarLinks}
  {appNavBarLinks} 
  page={$page} 
  {goto}
  bind:isDarkTheme={$isDarkTheme}
  bind:screenWidth={$screenWidth} 
  bind:screenHeight={$screenHeight}
  bind:screenWidthThreshold={$screenWidthThreshold}
  bind:isSmallScreen={$isSmallScreen}
  bind:isAppScreen={$isAppScreen}
  bind:isApp={$isApp}
  bind:isAllNavBarHidden={$isAllNavBarHidden}
  bind:isNavBarHidableFromScroll={$isNavBarHidableFromScroll}
  bind:isNavBarHiddenFromScroll={$isNavBarHiddenFromScroll}
  bind:isNavBarShown={$isNavBarShown}
  bind:isFullNavPrevented={$isFullNavPrevented}
  bind:isFullNavToggledOn={$isFullNavToggledOn}
  bind:isFullNavShown={$isFullNavShown}
  bind:navBarHeight={$navBarHeight}
  bind:shownNavBarHeight={$shownNavBarHeight}
  bind:availableContentHeight={$availableContentHeight}
>
	<div slot="navBarLogo">
		<Logo />
	</div>
	<div slot="appNavBarLogo">
		<Logo />
	</div>
	<div slot="extraLinks">
		<AuthTrigger />
	</div>
	<div slot="content">
		<slot />
	</div>
	<div slot="additional">
		<AuthModal />
	</div>
</Layout>

<style>
	:root {
		--primary: #2ca01c;
		--primary-dark: #108000;
		--primary-light: #53b700;
		--primary-transparent: #1977192a;
	}
	:global(body.dark) {
		--primary: #2ca01c;
		--primary-dark: #108000;
		--primary-light: #53b700;
		--primary-transparent: #1977192a;
		--red-error: #d6263d;
		--shadow: #0000003a;
		--shadow-soft: #00000040;
		--shadow-strong: #0000008a;
		--tint: #ffffff3a;
		--tint-strong: #ffffff6a;
		--tint-soft: #ffffff1a;
		--white-light: #efefef;
		--white-med: #e6e6e6;
		--white-dark: #c2c2c2;
		--gray-light: #666666;
		--gray-med: #555555;
		--bg-light: #404040;
		--bg-med: #181a20;
		--bg-med-transparent: #181a20dd;
		--bg-highlight: #242424;
		--bg-highlight-strong: #333333;
		--bg-highlight-stronger: #555555;
		--bg-dark: #000000;
		--contrast-soft: #a4aebc;
		--contrast-med: #eaecef;
		--contrast-strong: #fafcff;
		--contrast-overlay: #ffffff20;
		--bg-modal: #242424;
	}
	:global(*) {
		-webkit-tap-highlight-color: transparent;
		/* color: var(--contrast-med); */
	}
	:global(html) {
		text-align: center;
		font-size: 62.5%;
	}
	:global(body) {
		background: var(--bg-med);
		color: var(--contrast-med);
		font-size: 14px;
		font-size: 1.4rem;
		margin: 0;
	}
	:global(h1) {
		font-size: 20px;
		font-size: 2rem;
		margin: 0;
	}
	:global(h1) {
		font-size: 20px;
		font-size: 2rem;
		margin: 0;
	}
	:global(h2) {
		font-size: 18px;
		font-size: 1.8rem;
		margin: 0;
	}
	:global(h3) {
		font-size: 16px;
		font-size: 1.6rem;
		margin: 0;
	}
	:global(h4) {
		font-size: 15px;
		font-size: 1.5rem;
		margin: 0;
	}
	:global(h5) {
		font-size: 14px;
		font-size: 1.4rem;
		margin: 0;
	}
	:global(div) {
		font-size: 14px;
		font-size: 1.4rem;
	}
	:global(p) {
		font-size: 14px;
		font-size: 1.4rem;
		margin: 0;
	}
	:global(::placeholder) {
		color: var(--contrast-soft);
		opacity: 1;
	}
</style>