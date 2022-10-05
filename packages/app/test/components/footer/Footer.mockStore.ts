import { writable } from 'svelte/store';
export const baseUrl =
    'https://dev09-na03-hbc.demandware.net/on/demandware.store/Sites-SaksOff5th-Site/en_US/';

export const contentSlots = writable([
    {
        header: 'contentSlots header 1',
        ariaControls: 'contentSlots 1 aria',
        links: [
            {
                label: `contentSlots 1 link label 1`,
                external: true,
                href: 'https://www.contentSlots1href1.com/',
                className: 'content-slots-link'
            },
            {
                label: 'contentSlots 1 link label 2',
                external: false,
                href: 'https://www.contentSlots1href2.com/'
            }
        ]
    },
    {
        header: 'contentSlots header 2',
        ariaControls: 'contentSlots 2 aria',
        links: [
            {
                label: `contentSlots 2 link label 1`,
                external: true,
                href: 'https://www.contentSlots2href1.com/',
                className: 'content-slots-link'
            },
            {
                label: 'contentSlots 2 link label 2',
                external: false,
                href: 'https://www.contentSlots2href2.com/'
            }
        ]
    }
]);

export const footerSocial = writable([
    {
        label: 'Instagram',
        icon: 'instagram',
        variant: 'icon',
        href: 'https://www.instagram.com/saksoff5th/'
    }
]);

export const footerLink = writable({
    footerLegal: {
        label: `mock footerLink`,
        className: `footerLegal`,
        external: true,
        href: `https://www.footerLegal.com/`
    },
    footerCopyright: {
        label: `mock footerCopyright`
    },
    footerApp: {
        label: `mock footerApp`,
        className: `footer-app`,
        external: true,
        href: `https://www.footerApp.com`
    },
    footerFeedback: {
        label: `mock footerFeedback`,
        className: `footer-feedback`,
        id: 'footerFeedback',
        value: 'unclicked',
        color: 'link',
        script: () => {
            document
                .getElementById('footerFeedback')
                ?.setAttribute('value', 'clicked');
        }
    }
});
