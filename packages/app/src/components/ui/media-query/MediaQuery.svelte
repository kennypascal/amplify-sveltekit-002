<script lang="ts">
    /**
     * MediaQuery sets the store values for window related data (screen size, sroll position, etc.).
     * Components can subscribe to these values as needed without having to set or update them.
     *
     * The <svelte:window> element allows you to add event listeners to the
     * window object without worrying about removing them when the component is
     * destroyed, or checking for the existence of window when server-side rendering.
     * This element may only appear the top level of your component and must never
     * be inside a block or element (https://svelte.dev/docs#template-syntax-svelte-window).
     */

    import { onMount, tick } from 'svelte';
    import { handleOnScroll } from '../../../stores/BackToTop.store';
    import { setBreakpoint } from '../../../stores/Breakpoint.store';

    let innerWidth: number;
    let yPx: number;

    $: setBreakpoint(innerWidth);
    $: handleOnScroll(yPx);

    function onResize() {
        setBreakpoint(innerWidth);
    }

    onMount(async () => {
        await tick();
        onResize();
    });
</script>

<svelte:window bind:innerWidth bind:scrollY={yPx} on:resize={onResize} />
