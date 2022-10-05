<script lang="ts">
    import { default as cx } from 'classnames';
    import { afterUpdate } from 'svelte';

    export let isOpen = false;

    let containerClassnames = cx('tw-relative');
    $: ready = false;

    $: baseClassnames = cx('tw-absolute');
    $: open = isOpen;
    $: plusRestProps = {
        ...$$restProps,
        class: ready
            ? cx(
                  baseClassnames,
                  !open ? 'tw-animate-spin-in' : 'tw-animate-spin-out'
              )
            : ''
    };
    $: minusRestProps = {
        ...$$restProps,
        class: ready
            ? cx(
                  baseClassnames,
                  open ? 'tw-animate-spin-in' : 'tw-animate-spin-out'
              )
            : 'tw-hidden'
    };

    afterUpdate(() => {
        /** Avoid the spin-in-out animation on first render. */
        if (isOpen === true && ready !== true) {
            ready = true;
        }
    });
</script>

<span class={containerClassnames}>
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...plusRestProps}
    >
        <line
            y1="12.0001"
            x2="24"
            y2="12.0001"
            stroke="#212427"
            stroke-width="2"
        />
        <line
            x1="12.0005"
            y1="24"
            x2="12.0005"
            stroke="#212427"
            stroke-width="2"
        />
    </svg>
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...minusRestProps}
    >
        <line y1="11" x2="24" y2="11" stroke="#212427" stroke-width="2" />
    </svg>
</span>
