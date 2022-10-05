<script lang="ts">
    import { backToTopLabel } from '@stores/Footer.store';
    import { default as cx } from 'classnames';
    import {
        hover,
        showButton,
        toggleHover
    } from '../../../stores/BackToTop.store';
    $: btnClasses = cx(
        'tw-bottom-16',
        'tw-right-3.5',
        'tw-fixed',
        'tw-z-99',
        'tw-select-none',
        {
            'tw-opacity-0 tw-invisible': !$showButton
        }
    );
    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<button
    type="button"
    aria-label={$backToTopLabel}
    class={btnClasses}
    on:click={goTop}
    on:mouseenter={toggleHover}
    on:mouseleave={toggleHover}
>
    <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="M23.5 0.5H0.5V23.5H23.5V0.5Z"
            fill={$hover ? '#00676C' : 'white'}
            stroke="#212427"
        /><path
            d="M11.6136 10.9886L8.2564 14.4694L7.56092 13.7749L11.9643 9.28472L16.3837 13.7717L15.6774 14.469L12.3341 10.9893L11.9742 10.6147L11.6136 10.9886Z"
            fill="#212427"
            stroke={$hover ? 'white' : '#212427'}
        />
    </svg>
</button>
