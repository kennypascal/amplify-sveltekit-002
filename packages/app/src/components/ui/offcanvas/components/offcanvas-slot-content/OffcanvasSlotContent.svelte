<script lang="ts">
    import { default as cx } from 'classnames';
    import { getContext } from 'svelte';
    import { key } from '../../context';

    export { classNames as class };

    let classNames = '';

    const { offCanvasIdCtx, offCanvasPositionCtx } = getContext<any>(key);
</script>

<div
    id={$offCanvasIdCtx}
    class={cx(
        'offcanvas-content-container',
        'tw-bg-white',
        'tw-relative',
        'tw-overflow-auto',
        {
            'tw-h-screen tw-inline-block': $offCanvasPositionCtx === 'left',
            'tw-w-screen': $offCanvasPositionCtx === 'top',
            'tw-p-2': $offCanvasPositionCtx === 'center'
        },
        classNames
    )}
>
    <slot />
</div>
