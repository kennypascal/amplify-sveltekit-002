import { default as cx } from 'classnames';

/**
 * This is for get all the atributes needed to render the component specified.
 * @param classNames The Tailwinds classes.
 * @param restProps All the options (for example: label, class, etc.).
 * @returns All the atributes the component needs to render.
 */
export function createAttributes(
    classNames: string | undefined,
    restProps: {}
) {
    if (classNames) {
        return {
            ...restProps,
            classNames: cx(classNames)
        };
    } else {
        return {
            ...restProps
        };
    }
}
/**
 * This function allows you to add the default tw-class where it is necessary.
 * @param appJSON main json with all the properties provided to the component.
 * @variant content variant name SKINNYBANNER/MEDIUMBANNER/LARGEBANNER/HOME2UP.
 */
export function updateContentClassNames(appJSON: any, variant: string) {
    if (appJSON.content) {
        updateAppJSONWithContent(appJSON, variant);
    } else {
        updateAppJSON(appJSON, variant);
    }
}

function updateAppJSONWithContent(appJSON: any, variant: string) {
    appJSON.title.className = cx(
        getContentClassNames(variant, 'title'),
        appJSON.title.className
    );
    appJSON.content.forEach((elem: any) => {
        for (let key in elem) {
            if (elem[key].label) {
                elem[key].className = cx(
                    getContentClassNames(variant, key),
                    elem[key].className
                );
            }
            if (key === 'cta')
                elem[key].forEach((ctaElem: any) => {
                    ctaElem.className = cx(
                        getContentClassNames(variant, 'cta'),
                        ctaElem.className
                    );
                });
        }
    });
}

function updateAppJSON(appJSON: any, variant: string) {
    for (let key in appJSON) {
        if (appJSON[key].label) {
            appJSON[key].className = cx(
                getContentClassNames(variant, key),
                appJSON[key].className
            );
        }
        if (key == 'cta') {
            appJSON[key].forEach((ctaElem: any) => {
                ctaElem.className = cx(
                    getContentClassNames(variant, 'cta'),
                    ctaElem.className
                );
            });
        }
    }
}

/**
 * This function is to get the default classes of any attribute of the content.
 * @param variant The content variant.
 * @param option The attribute of the content, for example: header, description, etc.
 * @returns The default tailwind classes.
 */
function getContentClassNames(variant: string, option: string) {
    switch (option) {
        case 'title':
            return [getContentTitleClassNames(variant)];
        case 'header':
            return [getContentHeaderClassNames(variant)];
        case 'promo':
            return [getContentPromoClassNames(variant)];
        case 'preheader':
            return [getContentPreheaderClassNames(variant)];
        case 'description':
            return [getContentDescriptionClassNames(variant)];
        case 'disclaimer':
            return [getContentDisclaimerClassNames(variant)];
        case 'cta':
            return [getContentCTAClassNames(variant)];
        default:
            return [];
    }
}

function getContentTitleClassNames(variant: string) {
    const baseTextClassNamessTitle = [
        'tw-font-serif',
        'tw-text-5',
        'tw-text-center',
        'tw-font-medium'
    ];
    const baseTextLgClassNamessTitle = ['lg:tw-text-6'];
    switch (variant) {
        case 'HOME4UPE':
            return [
                ...baseTextClassNamessTitle,
                'tw-pb-[25px]',
                ...baseTextLgClassNamessTitle,
                'lg:tw-pb-[25px] lg:tw-pt-[0px]'
            ];
        case 'HOME2X2':
            return [
                ...baseTextClassNamessTitle,
                'tw-py-3',
                ...baseTextLgClassNamessTitle,
                'lg:tw-p-2.5'
            ];
        case 'HOME3UP':
            return [
                ...baseTextClassNamessTitle,
                'tw-p-3.5',
                ...baseTextLgClassNamessTitle,
                'lg:tw-p-5'
            ];
        /*
        case 'SOMEVARIANT':
            return [
                ...baseTextClassNamessTitle,
                'tw-another-class-for-mobile',
                ...baseTextLgClassNamessTitle,
                'tw-another-class-for-lg',
            ];
        */
        default:
            return [
                ...baseTextClassNamessTitle,
                'tw-py-6',
                ...baseTextLgClassNamessTitle
            ];
    }
}

function getContentHeaderClassNames(variant: string) {
    const baseTextClassNamessHeader = [
        'tw-text-5',
        'tw-text-center',
        'tw-font-medium'
    ];
    const baseTextLgClassNamessHeader = ['lg:tw-text-6'];
    switch (variant) {
        case 'HOME2X2':
            return [
                ...baseTextClassNamessHeader,
                'tw-px-3.5',
                'tw-font-serif',
                ...baseTextLgClassNamessHeader
            ];
        case 'HOME3UP':
            return [
                ...baseTextClassNamessHeader,
                'tw-px-3.5',
                'tw-font-serif',
                ...baseTextLgClassNamessHeader
            ];
        case 'STACK':
            return [
                ...baseTextClassNamessHeader,
                'tw-px-3.5 tw-font-sans tw-uppercase',
                'tw-font-medium'
            ];
        case 'HERO':
            return [
                ...baseTextClassNamessHeader,
                'tw-font-serif',
                ...baseTextLgClassNamessHeader,
                'tw-mb-[20px] md:tw-text-7 lg:tw-text-7'
            ]
        default:
            return [
                ...baseTextClassNamessHeader,
                'tw-font-serif',
                ...baseTextLgClassNamessHeader
            ];
    }
}

function getContentPreheaderClassNames(variant: string) {
    const baseTextClassNamessHeader = [
        'tw-font-sans',
        'tw-text-center',
        '-tw-mb-1',
        'tw-mt-3',
        'tw-text-1',
        'tw-leading-4'
    ];
    // const baseTextLgClassNamessHeader = ['lg:tw-text-6'];
    switch (variant) {
        case 'HERO':
            return [...baseTextClassNamessHeader, 'tw-mt-9', 'sm:tw-mt-3', 'lg:tw-mt-3', 'md:tw-mt-3'];
        default:
            return [...baseTextClassNamessHeader];
    }
}

function getContentPromoClassNames(variant: string) {
    const baseTextClassNamessPromo = [
        'tw-font-sans',
        'tw-text-center',
        'tw-uppercase'
    ];
    const baseTextLgClassNamessPromo = ['lg:tw-text-5'];
    switch (variant) {
        case 'HERO':
            return [
                ...baseTextClassNamessPromo,
                'tw-font-medium',
                'tw-mb-[5px]',
                'tw-text-4',
                'sm:tw-text-4',
                'sm:tw-leading-6',
                'md:tw-text-5',
                'md:tw-leading-8',
                'lg:tw-pt-0',
                ...baseTextLgClassNamessPromo
            ];
        case 'MEDIUMBANNER':
            return [
                ...baseTextClassNamessPromo,
                'tw-font-bold',
                ...baseTextLgClassNamessPromo
            ];
        case 'HOME2UP':
            return [
                ...baseTextClassNamessPromo,
                'tw-text-[22px]',
                ...baseTextLgClassNamessPromo
            ];
        case 'HOME2X2':
            return [
                ...baseTextClassNamessPromo,
                'tw-text-[22px] tw-px-3.5',
                ...baseTextLgClassNamessPromo
            ];
        case 'HOME3UP':
            return [
                ...baseTextClassNamessPromo,
                'tw-text-[22px] tw-px-3.5 tw-pt-1',
                ...baseTextLgClassNamessPromo,
                'lg:tw-pt-0'
            ];
        case 'STACK':
            return [
                ...baseTextClassNamessPromo,
                'tw-text-5 tw-px-3.5',
                'tw-font-medium',
                ...baseTextLgClassNamessPromo,
                'lg:tw-pt-0'
            ];
        default:
            return [...baseTextClassNamessPromo, ...baseTextLgClassNamessPromo];
    }
}

function getContentDescriptionClassNames(variant: string) {
    const baseTextClassNamessDescription = [
        'tw-font-sans',
        'tw-text-3',
        'tw-text-center'
    ];
    switch (variant) {
        case 'HOME2X2':
            return [...baseTextClassNamessDescription, 'tw-p-3.5 lg:tw-py-5'];
        case 'HOME3UP':
            return [...baseTextClassNamessDescription, 'tw-p-3.5'];
        /*
        case 'SOMEVARIANT':
            return [
                ...baseTextClassNamessTitle,
                'tw-another-class-for-mobile',
                ...baseTextLgClassNamessTitle,
                'tw-another-class-for-lg',
            ];
        */
        case 'HERO':
            return [...baseTextClassNamessDescription, 'tw-pb-[32px]', 'xs:tw-pb-[32px]', 'sm:tw-pb-[25px]', 'md:tw-pb-[25px]', 'lg:tw-pb-[25px]'];
        default:
            return [...baseTextClassNamessDescription, 'tw-p-4'];
    }
}

function getContentDisclaimerClassNames(variant: string) {
    const baseTextClassNamessDisclaimer = [
        'tw-font-sans',
        'tw-text-1',
        'tw-text-center'
    ];
    switch (variant) {
        case 'HOME2X2':
            return [...baseTextClassNamessDisclaimer, 'tw-p-3.5 lg:tw-pt-5'];
        case 'HOME3UP':
            return [...baseTextClassNamessDisclaimer, 'tw-p-3.5'];
        /*
        case 'SOMEVARIANT':
            return [
                ...baseTextClassNamessTitle,
                'tw-another-class-for-mobile',
                ...baseTextLgClassNamessTitle,
                'tw-another-class-for-lg',
            ];
        */
        default:
            return [...baseTextClassNamessDisclaimer, 'tw-p-4'];
    }
}

function getContentCTAClassNames(variant: string) {
    const baseTextClassNamessCTA = [
        'tw-font-sans',
        'tw-font-bold',
        'tw-underline',
        'tw-text-2',
        'tw-underline-offset-4',
        'tw-text-center',
        'tw-text-2',
        'tw-uppercase',
        'hover:tw-no-underline'
    ];
    const baseTextClassNamesCTAH4UpE = [
        'tw-font-sans',
        'tw-text-3 ',
        'lg:tw-text-[22px]',
        'tw-font-medium',
        'tw-uppercase',
        'hover:tw-underline'
    ];
    const baseTextLgClassNamessCTA = ['lg:tw-text-3'];
    switch (variant) {
        case 'HOME4UPE':
            return [...baseTextClassNamesCTAH4UpE];
        case 'HEROLOWERNAV':
            return [...baseTextClassNamessCTA];
        case 'HERO':
            return [...baseTextClassNamessCTA];
        /*
        case 'SOMEVARIANT':
            return [
                ...baseTextClassNamessTitle,
                'tw-another-class-for-mobile',
                ...baseTextLgClassNamessTitle,
                'tw-another-class-for-lg',
            ];
        */
        default:
            return [...baseTextClassNamessCTA, ...baseTextLgClassNamessCTA];
    }
}
