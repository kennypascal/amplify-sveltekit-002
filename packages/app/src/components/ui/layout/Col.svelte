<script>
    import { default as cx } from 'classnames';

    export { className as class };

    let className = '';

    $: classes = cx('column', className);
</script>

<div {...$$restProps} class={classes}>
    <slot />
</div>
