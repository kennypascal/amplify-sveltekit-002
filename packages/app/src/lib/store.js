import { writable } from "svelte/store"

export const isDarkTheme = writable(false)
export const screenWidth = writable(0)
export const screenHeight = writable(0)
export const screenWidthThreshold = writable(600)
export const isSmallScreen = writable(false)
export const isAppScreen = writable(false)
export const isApp = writable(false)
export const isAllNavBarHidden = writable(false)
export const isNavBarHidableFromScroll = writable(true)
export const isNavBarHiddenFromScroll = writable(false)
export const isNavBarShown = writable(true)
export const isFullNavPrevented = writable(false)
export const isFullNavToggledOn = writable(false)
export const isFullNavShown = writable(false)
export const navBarHeight = writable(0)
export const shownNavBarHeight = writable(0)
export const availableContentHeight = writable(0)