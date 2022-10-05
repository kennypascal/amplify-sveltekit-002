/**
 * Stores the current screen size information which is updated via the <MediaQuery> component.
 *
 * TODO: Unit test both the breakpoint store and the <MediaQuery> component.
 */
import { get, readable, writable } from 'svelte/store';

export interface IBreakpoint {
    size: string;
    innerWidth: number;
    isDesktop: boolean;
}

const screenSize = [
    {
        size: 'XS',
        px: 480,
        isDesktop: false
    },
    {
        size: 'SM',
        px: 640,
        isDesktop: false
    },
    {
        size: 'MD',
        px: 768,
        isDesktop: false
    },
    {
        size: 'LG',
        px: 1024,
        isDesktop: true
    },
    {
        size: 'XL',
        px: 1280,
        isDesktop: true
    },
    {
        size: '2XL',
        px: 1536,
        isDesktop: true
    }
];

let breakpointCache = { size: 'SM', isDesktop: false };

export let breakpoint = writable(breakpointCache);

let isDesktopSet: any = undefined;
let sizeSet: any = undefined;

export let isDesktop = readable(false, set => {
    isDesktopSet = set;
});

export let size = readable('SM', set => {
    sizeSet = set;
});

export function setBreakpoint(innerWidth: number) {
    screenSize.forEach(element => {
        if (innerWidth >= element.px) {
            breakpointCache = element;
        }
    });
    if (get(size) !== breakpointCache.size) {
        sizeSet(breakpointCache.size);
    }
    if (get(isDesktop) !== breakpointCache.isDesktop) {
        isDesktopSet(breakpointCache.isDesktop);
    }
}
