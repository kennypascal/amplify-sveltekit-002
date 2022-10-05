<script lang="ts">
    import Button from '@ui/button/Button.svelte';
    import { default as cx } from 'classnames';
    import { tick } from 'svelte';
    import { fade } from 'svelte/transition';

    export { classNames as class };

    const waitTimeForSearch = 400;
    let searchTimeout = setTimeout(() => {}, waitTimeForSearch);

    let classNames = '';
    let searchInputElement: HTMLInputElement;
    let searchInputElementValue: '';
    let showClear = false;

    /** The input field will take focus when the search component is activated. */
    function setFocus(node: HTMLInputElement) {
        const awaitToSet = async () => {
            await tick();
            node.focus();
        };
        awaitToSet();
    }

    async function getSearchSuggestion(e: any) {
        const searchTerm = e.target.value;
        const searchTime = Date.now();
        showClear = searchInputElementValue !== '';

        clearTimeout(searchTimeout);
        if (searchTerm.length > 2) {
            searchTimeout = setTimeout(async () => {
                const response = await fetch('/api/search', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ searchTerm })
                });
                const data = await response.json();
            }, waitTimeForSearch);
        }
    }
</script>

<div
    class={cx(
        'search-input',
        'tw-block',
        'tw-border-b',
        'tw-border-b-2',
        'tw-border-light-gray',
        'tw-relative',
        'focus-within:tw-border-steel',
        classNames
    )}
>
    <label class="tw-sr-only" for="site-search">Search the site:</label>
    <input
        use:setFocus
        placeholder="Search"
        id="site-search"
        data-testid="search"
        class={cx(
            'tw-inline',
            'tw-w-full',
            'tw-text-4',
            'tw-p-2',
            'tw-pl-12',
            'focus:tw-outline-none'
        )}
        bind:this={searchInputElement}
        bind:value={searchInputElementValue}
        on:input={getSearchSuggestion}
    />
    <Button
        variant="icon"
        options={{
            name: 'search-o',
            srLabel: 'Submit search keywords',
            class: cx('first:tw-opacity-50', 'hover:first:tw-opacity-100')
        }}
        class={cx(
            'search-input-submit-btn',
            'tw-absolute',
            'tw-left-0',
            'tw-top-1/2',
            '-tw-translate-y-[50%]',
            'tw-grayscale',
            'tw-transition-opacity'
        )}
    />
    {#if showClear}
        <input
            transition:fade={{ duration: 150 }}
            type="reset"
            value="Clear"
            data-testid="showClear"
            class={cx(
                'tw-absolute',
                'tw-right-0',
                'tw-top-1/2',
                '-tw-translate-y-[50%]',
                'tw-text-1',
                'tw-underline',
                'tw-cursor-pointer',
                'focus-ring',
                { 'tw-hidden': !showClear }
            )}
            on:click={() => {
                showClear = false;
                searchInputElement.focus();
            }}
        />
    {/if}
</div>
