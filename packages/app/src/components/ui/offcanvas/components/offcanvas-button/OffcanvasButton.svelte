<script lang="ts">
    import { default as cx } from 'classnames';
    import { getContext } from 'svelte';
    import { key } from '../../context';

    export { classNames as class };
    export let as: 'open' | 'close' = 'open';

    const {
        offCanvasPositionCtx,
        offCanvasToggleCtx,
        offCanvasUseDefaultCloseCtx
    } = getContext<any>(key);

    let classNames = '';
    let childClassNames = '';

    function getButtonClasseNames() {
        if (as === 'close' && $offCanvasUseDefaultCloseCtx) {
            switch ($offCanvasPositionCtx) {
                case 'left':
                    return cx(
                        'tw-p-2',
                        'tw-absolute',
                        'tw-left-full',
                        'tw-invert',
                        'tw-brightness-100'
                    );
                case 'top':
                    return cx(
                        'tw-p-4',
                        'tw-inline-block',
                        'tw-float-right',
                        'tw-mr-2',
                        'tw-mt-6',
                        'tw-z-40'
                    );

                default:
                    return cx('tw-p-2', 'tw-float-right');
            }
        }
        return;
    }

    function applyChildBtnClasses(node: HTMLElement) {
        /**
         * The child classes are apllied to the button to allow custom size,
         * position, styles to persist on the button element.
         */
        childClassNames =
            node &&
            node.children &&
            node.children[0] &&
            node.children[0].className;
        childClassNames =
            childClassNames &&
            childClassNames.includes('icon icon-') &&
            !childClassNames.includes('icon icon-so5-close')
                ? 'btn btn-icon tw-align-middle'
                : '';
        return {
            destroy() {}
        };
    }

    function onClick() {
        $offCanvasToggleCtx(as === 'open');
    }
</script>

<button
    use:applyChildBtnClasses
    class={cx(
        'offcanvas-btn',
        `offcanvas-btn__${as}`,
        classNames || getButtonClasseNames(),
        childClassNames
    )}
    on:click={onClick}
>
    <slot />
</button>
