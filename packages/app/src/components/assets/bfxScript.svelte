<script context="module">
    import { Amplify } from 'aws-amplify';
    import awsExports from 'aws-exports';
    Amplify.configure({ ...awsExports, ssr: true });

    import { credentials, VITE_BASE_URL } from '@stores/api/creds';
    export const {
        VITE_BORDERFREE_API_KEY,
        VITE_BORDERFREE_ENVIRONMENT,
        VITE_BORDERFREE_HOST_NAME,
        VITE_BORDERFREE_LOG_LEVEL
    } = credentials;
</script>

<script lang="ts">
    import { browser } from '$app/env';
    import { onMount } from 'svelte';

    let bfxWrapperElement: HTMLDivElement;

    if (browser) {
        (function (e, n, t, a, o) {
            function c(n) {
                e[a]._apiKey = n.key;
                e[a]._env = n.env;
                e[a]._logLevel = n.logLevel;
            }
            e[a] = c;
            e[a].l = 1 * new Date();
            var i, l;
            i = n.createElement(t);
            l = n.getElementsByTagName(t)[0];
            i.async = 1;
            i.src = o;
            l.parentNode.insertBefore(i, l);
        })(
            window,
            document,
            'script',
            'bfx',
            `${VITE_BORDERFREE_HOST_NAME}/v1/dist/bfx.js`
        );
        bfx({
            key: `${VITE_BORDERFREE_API_KEY}`,
            env: `${VITE_BORDERFREE_ENVIRONMENT}`,
            mode: 'default',
            brand: 'default',
            logLevel: `${VITE_BORDERFREE_LOG_LEVEL}`
        });
    }

    onMount(() => {
        window.addEventListener(
            'bfx-contextChooser-loadEnd',
            () => {
                let wrapper = document.querySelector('#bfx-cc-wrapper');
                if (wrapper) {
                    bfxWrapperElement.prepend(wrapper);
                }
            },
            false
        );
    });
</script>

<span
    class="bfxcountrycodeURL"
    data-bfxcountrycode="${VITE_BASE_URL}/on/demandware.store/Sites-SaksOff5th-Site/en_US/OrderCreation-SetBFXCountryCode"
/>
<div id="bfx-wrapper-element" bind:this={bfxWrapperElement} />

<style global lang="postcss">
    #bfx-wrapper-element {
        margin-bottom: 10px;
        user-select: none;
    }

    #bfx-cc-wrapper {
        position: absolute;
        z-index: 0;
        width: 16px;
    }

    #bfx-cc-wrapper .bfx-cc-expanded {
        background: #fff;
        border: 1px solid #363636;
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        letter-spacing: 0;
        margin: 8px;
        padding: 0;
    }

    #bfx-cc-wrapper.bfx-cc-position-top {
        width: auto;
        z-index: 1;
        padding: 2%;
    }

    #bfx-cc-flag-link > img {
        height: 14px !important;
        width: 20px !important;
    }

    #bfx-cc-wrapper .bfx-cc-expanded .bfx-cc-content {
        width: 100%;
        margin: 0;
        padding: 30px 15px;
        border: none;
        display: block;
        height: auto;
        overflow: hidden;
    }

    #bfx-cc-wrapper .bfx-cc-expanded .bfx-cc-content .bfx-cc-text {
        color: #444;
        font-family: 'Centra No1', helvetica, Arial, Sans-Serif;
        font-weight: 400;
        font-size: 12px;
        margin: 0 0 30px;
        border: none;
        letter-spacing: 0;
        line-height: 1.2em;
        text-align: left;
    }

    #bfx-cc-wrapper form {
        border: 0;
        font: inherit;
        letter-spacing: 0;
        line-height: 1;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    #bfx-cc-wrapper .bfx-cc-expanded .bfx-cc-content .bfx-cc-logo-wrapper {
        display: none;
        margin: 20px 0 0;
        padding: 0;
    }
    #bfx-cc-wrapper .bfx-cc-expanded::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        background: #fff;
        right: 20px;
        transform: rotate(-316deg);
        top: 27px;
        left: inherit;
    }

    #bfx-cc-wrapper
        .bfx-cc-expanded
        .bfx-cc-content
        form
        .bfx-cc-select-wrapper
        .bfx-cc-label {
        color: #444;
        margin: 35px 8px 10px 0;
        font-family: 'Centra No1', helvetica, Arial, Sans-Serif;
        font-weight: 500;
        text-align: left;
    }

    #bfx-cc-wrapper
        .bfx-cc-expanded
        .bfx-cc-content
        form
        .bfx-cc-select-wrapper
        select:disabled {
        border: none;
        background: transparent !important;
        font-family: 'Centra No1', helvetica, Arial, Sans-Serif;
        padding: 0;
        -webkit-appearance: none;
        color: #333 !important;
    }

    #bfx-cc-wrapper
        .bfx-cc-expanded
        .bfx-cc-content
        form
        .bfx-cc-select-wrapper
        select {
        -webkit-appearance: menulist-button;
        background: #fff;
        border: 1px solid #000;
        color: #000;
        font: 14px centra no1, helvetica, Arial, Sans-Serif;
        height: 31px;
        letter-spacing: 0;
        line-height: 27px;
        margin-right: 16px;
        padding: 5px;
        width: 100%;
        height: calc(1.5em + 0.75rem + 12px);
        border-color: #666;
        border-radius: 2px;
    }

    #bfx-cc-wrapper .bfx-cc-expanded .bfx-cc-content form #bfx-cc-btn {
        background: #000;
        width: 100%;
        border-radius: 0;
        font-size: 12px;
        margin: 25px 0 0;
    }
    div.bfx-wm-dialog {
        width: 100% !important;
        max-width: 490px;
        left: 50% !important;
        top: 50% !important;
        transform: translate(-50%, -50%);
    }

    #bfx-wm-wrapper {
        background: #fff;
        border: 1px solid #000;
        padding: 15px;
        width: auto;
        min-height: 0px;
        max-height: none;
        height: auto;
    }

    #bfx-wm-wrapper #bfx-wm-content {
        background: none;
        font-family: 'Centra No1', helvetica, Arial, Sans-Serif;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-head {
        background: none;
        height: auto;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-head::before {
        box-sizing: border-box;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body {
        background: none;
        padding: 0 20px;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-title #bfx-wm-flag {
        order: 2;
        margin: 0;
        border: none;
        float: right;
        height: 23px;
        padding: 0;
        width: 35px;
    }

    #bfx-wm-wrapper
        #bfx-wm-content
        #bfx-wm-body
        #bfx-wm-title
        #bfx-wm-headline {
        margin: 0 0 20px;
        padding: 0;
        color: #444;
        font-size: 28px;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-title {
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        margin: 0 0 25px;
        font-size: 26px;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-subheadline {
        border: none;
        font-style: normal;
        font-size: 18px;
        color: #444;
        padding: 0;
        margin: 0 25px 15px;
        text-align: center;
        clear: both;
        font-weight: 400;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-sellpoints {
        margin: 0 0 30px;
        float: left;
        width: 100%;
        color: #000;
        font-size: 15px;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-foot {
        display: none;
        background: #e4e4e4;
        height: 25px;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-sellpoints ul li {
        color: #000;
        margin-left: 40px;
        padding: 0 0 9px 20px;
        text-align: left;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-info {
        display: none;
        clear: both;
        padding: 6px;
        color: #595959;
        font-size: 13px;
        margin: 0 10px;
        text-align: center;
    }

    #bfx-wm-wrapper
        #bfx-wm-content
        #bfx-wm-body
        #bfx-wm-continue-button-wrapper {
        margin: 0 15px;
        padding-bottom: 20px;
        text-align: center;
    }

    #bfx-wm-wrapper
        #bfx-wm-content
        #bfx-wm-body
        #bfx-wm-continue-button-wrapper
        #bfx-wm-continue-button {
        font-family: 'Centra No1', helvetica, Arial, Sans-Serif;
        font-weight: 500;
        font-size: 14px;
        background: #000;
        height: 45px;
        text-transform: uppercase;
        width: 100%;
        max-width: 320px;
        border: 0;
        color: #fff;
        cursor: pointer;
        text-align: center;
        text-shadow: 1px 1px 1px #000;
    }

    #bfx-wm-wrapper #bfx-wm-content #bfx-wm-body #bfx-wm-promo {
        background: none;
        border: none;
        text-transform: none;
        font-size: 12px;
        color: #444;
        font-family: 'Centra No1', helvetica, Arial, Sans-Serif;
        clear: both;
        font-weight: 400;
        margin: 0 0 0 2px;
        padding: 10px 25px;
        text-align: center;
    }

    #bfx-wm-wrapper #bfx-wm-content a#bfx-wm-close-button {
        display: inline-block;
        top: 20px;
        right: 20px;
        transform: scale(0.77);
        background: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.5 1.5L1.5 24.5' stroke='%23212427' stroke-width='2'/%3E%3Cpath d='M1.5 1.5L24.5 24.5' stroke='%23212427' stroke-width='2'/%3E%3C/svg%3E")
            no-repeat !important;
        cursor: pointer;
        position: absolute;
        /* background-position: 0 32.519652461729414%; */
    }

    #bfx-wm-wrapper #bfx-wm-content a#bfx-wm-close-button:hover {
        /* background-position: 0 32.519652461729414% !important; */
        background: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.5 1.5L1.5 24.5' stroke='%23212427' stroke-width='2'/%3E%3Cpath d='M1.5 1.5L24.5 24.5' stroke='%23212427' stroke-width='2'/%3E%3C/svg%3E")
            no-repeat !important;
    }

    #bfx-wm-wrapper
        #bfx-wm-content
        #bfx-wm-body
        #bfx-wm-promo
        #bfx-wm-custom-promo {
        margin-top: 10px;
    }

    .svg-svg-22-cross-dims,
    #bfx-wm-wrapper #bfx-wm-content a#bfx-wm-close-button {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px) {
        #bfx-cc-wrapper .bfx-cc-expanded {
            width: 90%;
        }
    }

    @media (max-width: 1023.98px) {
        #bfx-cc-wrapper.bfx-cc-position-top.bfx-cc-position-right
            .bfx-cc-collapsed
            .bfx-cc-menu
            .bfx-cc-flag {
            font-family: 'centra no1', helvetica, Arial, Sans-Serif;
            color: #212427;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: normal;
            width: 80px;
        }
        #bfx-cc-wrapper.bfx-cc-position-top.bfx-cc-position-right
            .bfx-cc-collapsed
            .bfx-cc-menu
            .bfx-cc-flag::after {
            content: 'Ship To';
            position: relative;
            top: -2px;
            left: 5px;
        }
        #bfx-cc-wrapper {
            left: 82px;
        }

        #bfx-cc-wrapper .bfx-cc-expanded .bfx-cc-content {
            padding: 50px 15px 30px;
        }

        #bfx-cc-wrapper .bfx-cc-expanded {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            right: auto;
            z-index: 9999;
            height: auto !important;
            overflow: visible !important;
            position: fixed;
        }

        #bfx-cc-wrapper .bfx-cc-expanded::after {
            display: none;
        }

        .borderfree-close {
            display: inline-block;
            position: absolute;
            top: 10px;
            right: 10px;
            transform: scale(0.75);
        }

        #bfx-cc-wrapper span {
            border: 0;
            font: inherit;
            letter-spacing: 0;
            line-height: 1;
            margin: 0;
            padding: 0;
            vertical-align: baseline;
        }

        .svg-svg-22-cross-dims {
            width: 24px;
            height: 24px;
            background-position: 0 32.519652461729414%;
            background: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.5 1.5L1.5 24.5' stroke='%23212427' stroke-width='2'/%3E%3Cpath d='M1.5 1.5L24.5 24.5' stroke='%23212427' stroke-width='2'/%3E%3C/svg%3E")
                no-repeat !important;
        }
    }
</style>
