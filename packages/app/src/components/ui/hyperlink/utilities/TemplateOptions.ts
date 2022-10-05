import HyperlinkDefault from '../components/hyperlink-default/HyperlinkDefault.svelte';
import HyperlinkIcon from '../components/hyperlink-icon/HyperlinkIcon.svelte';
import HyperlinkIconText from '../components/hyperlink-icon-text/HyperlinkIconText.svelte';
import type { ITemplateOption } from '../IHyperlink';

export const hyperlinkTemplate = {
    DEFAULT: 'default',
    ICON: 'icon',
    ICON_TEXT: 'icon-text',
};

export const hyperlinkTemplateOption: ITemplateOption = [
    {
        name: hyperlinkTemplate.DEFAULT,
        component: HyperlinkDefault,
        requiredProps: ['label', 'href']
    },
    {
        name: hyperlinkTemplate.ICON,
        component: HyperlinkIcon,
        requiredProps: ['label', 'href', 'icon']
    },
    {
        name: hyperlinkTemplate.ICON_TEXT,
        component: HyperlinkIconText,
        requiredProps: ['label', 'href', 'icon']
    }
];

function getTemplate(variant: string) {
    return hyperlinkTemplateOption.filter(option => option.name === variant)[0];
}

export function getTemplateRequiredProps(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.requiredProps;
}

export function getTemplateComponent(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.component;
}
