import { readable, writable } from 'svelte/store';
import footerData from '../language/en/footer.json';
import { Service } from './Service';
const baseUrl = Service.baseUrl;

function updateContentSlots(contentSlotJson) {
    const contentSlots = contentSlotJson.slice();
    const regex = /https:\/\//g;
    contentSlots.forEach(item => {
        item.links.forEach(link => {
            if (!link.href?.match(regex)) {
                link.href = `${baseUrl}${link.href}`;
            }
        });
    });
    return contentSlots;
}

function updateFooterLink(footerData) {
    const updatedFooterLink = {
        footerLegal: { ...footerData.footerLegal },
        footerCopyright: {
            label: `© ${new Date().getFullYear()}, Saks OFF 5TH`
        },
        footerApp: { ...footerData.footerApp },
        footerFeedback: {
            ...footerData.footerFeedback,
            script: () => {
                function neb_addEventListener(
                    elem: any,
                    eventType: string,
                    handler: any
                ) {
                    if (elem.addEventListener) {
                        elem.addEventListener(eventType, handler, false);
                    } else if (elem.attachEvent) {
                        elem.attachEvent('on' + eventType, handler);
                    }
                }
                const scriptSrc =
                    'https://nebula-cdn.kampyle.com/wu/323067/onsite/embed.js';
                const formId = footerData.footerFeedback.formId;

                /* Self-contained script for MEDALLIA survey. Update formId and scriptSrc for your banner as needed. To stop functionality, simply remove this script*/
                function showSurvey() {
                    KAMPYLE_ONSITE_SDK.loadForm(formId);
                    KAMPYLE_ONSITE_SDK.showForm(formId);
                }
                if (typeof KAMPYLE_ONSITE_SDK !== 'undefined') {
                    showSurvey();
                } else {
                    neb_addEventListener(
                        window,
                        'neb_OnsiteLoaded',
                        showSurvey
                    );
                    const scriptTag = document.createElement('script');
                    scriptTag.src = scriptSrc;
                    document.body.appendChild(scriptTag);
                }
            }
        }
    };
    return updatedFooterLink;
}

export const contentSlots = readable(
    updateContentSlots(footerData.contentSlot)
);

export const footerSocial = readable(footerData.footerSocial);

export const footerLink = readable(updateFooterLink(footerData));

export const backToTopLabel = readable(footerData.backToTop['aria-label']);
