import { derived, get, writable } from 'svelte/store';

export const breakpoint = (() => {
    const innerWidth = writable(true);
    const breakpointValue = derived(innerWidth, ($innerWidth, set) => {
        set({
            isDesktop: get(innerWidth)
        });
    });

    return {
        setBreakpoint: innerWidth.set,
        ...breakpointValue
    };
})();
