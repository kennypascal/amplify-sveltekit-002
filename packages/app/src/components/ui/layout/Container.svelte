<script lang="ts">
    import { default as cx } from 'classnames';

    export { className as class };
    export let sm: boolean | undefined = undefined;
    export let md: boolean | undefined = undefined;
    export let lg: boolean | undefined = undefined;
    export let xl: boolean | undefined = undefined;

    let className = '';

    $: classes = cx('container', 'tw-mx-auto', className, {
        'tw-max-w-screen-sm': sm,
        'tw-max-w-screen-md': md,
        'tw-max-w-screen-lg': lg,
        'tw-max-w-screen-xl': xl
    });
</script>

<div {...$$restProps} class={classes}>
    <slot />
</div>
