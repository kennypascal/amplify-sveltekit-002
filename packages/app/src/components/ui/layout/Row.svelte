<script lang="ts">
    import { default as cx } from 'classnames';

    export { className as class };
    export let as: string = 'grid';

    let className: string = '';

    $: classes =
        as === 'flex'
            ? cx('row', 'tw-flex', className)
            : cx('row', 'tw-grid', className);
</script>

<div {...$$restProps} class={classes}>
    <slot />
</div>
