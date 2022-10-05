import ButtonClose from '../components/button-close/ButtonClose.svelte';
import ButtonIconText from '../components/button-icon-text/ButtonIconText.svelte';
import ButtonIcon from '../components/button-icon/ButtonIcon.svelte';
import ButtonText from '../components/button-text/ButtonText.svelte';
import type { ITemplateOption } from '../IButton';

export const buttonTemplate = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TEXT: 'text',
    ICON: 'icon',
    ICON_TEXT: 'icon-text',
    CLOSE: 'close'
};

export const buttonTemplateOption: ITemplateOption = [
    {
        name: buttonTemplate.PRIMARY,
        component: ButtonText,
        requiredProps: ['label']
    },
    {
        name: buttonTemplate.SECONDARY,
        component: ButtonText,
        requiredProps: ['label']
    },
    {
        name: buttonTemplate.TEXT,
        component: ButtonText,
        requiredProps: ['label']
    },
    {
        name: buttonTemplate.ICON,
        component: ButtonIcon,
        requiredProps: ['name', 'srLabel']
    },
    {
        name: buttonTemplate.ICON_TEXT,
        component: ButtonIconText,
        requiredProps: ['name', 'label']
    },
    { name: buttonTemplate.CLOSE, component: ButtonClose, requiredProps: [] }
];

function getTemplate(variant: string) {
    return buttonTemplateOption.filter(option => option.name === variant)[0];
}

export function getTemplateRequiredProps(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.requiredProps;
}

export function getTemplateComponent(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.component;
}
