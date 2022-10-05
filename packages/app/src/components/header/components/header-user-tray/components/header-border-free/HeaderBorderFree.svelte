<script lang="ts">
    import BfxScript from '@components/assets/bfxScript.svelte';
    import { default as cx } from 'classnames';

    export { classNames as class };

    let classNames = '';
</script>

<div
    class={cx(
        'tw-align-middle',
        'tw-p-2',
        'tw-w-10',
        'tw-inline-block',
        !classNames.includes('tw-sr-only') ? 'tw-relative' : '',
        classNames
    )}
>
    <BfxScript />
</div>
