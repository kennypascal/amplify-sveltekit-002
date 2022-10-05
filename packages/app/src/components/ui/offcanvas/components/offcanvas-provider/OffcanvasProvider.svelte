<script lang="ts">
    import { setContext } from 'svelte';
    import { readable, writable } from 'svelte/store';
    import { key } from '../../context';
    import type { IOffcanvasPosition } from '../../IOffcanvas';

    export let id: string;
    export let position: IOffcanvasPosition = 'left';
    export let useDefaultClose: boolean = true;

    let offCanvasIdCtx = readable(id);
    let offCanvasPositionCtx = readable(position);
    let offCanvasToggleCtx = readable(toggle);
    let offCanvasIsOpenCtx = writable(false);
    let offCanvasUseDefaultCloseCtx = readable(useDefaultClose);

    setContext(key, {
        offCanvasIdCtx,
        offCanvasPositionCtx,
        offCanvasToggleCtx,
        offCanvasIsOpenCtx,
        offCanvasUseDefaultCloseCtx
    });

    function toggle(value: boolean) {
        $offCanvasIsOpenCtx = value;
    }
</script>

<slot
    offCanvasIsOpenCtx={$offCanvasIsOpenCtx}
    offCanvasToggleCtx={$offCanvasToggleCtx}
/>
