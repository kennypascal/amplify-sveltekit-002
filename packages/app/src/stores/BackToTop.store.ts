import { get, writable } from 'svelte/store';

const showOnPx = 50;

export let showButton = writable(true);

export function handleOnScroll(yPx: number = 0) {
    return showButton.set(yPx > showOnPx);
}

export let hover = writable(false);

export function toggleHover() {
    return hover.set(!get(hover));
}
