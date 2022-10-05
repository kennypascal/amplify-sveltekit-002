import ImageDefault from '../components/image-default/ImageDefault.svelte';
import ImageArtDirection from '../components/image-art-direction/ImageArtDirection.svelte';
import type { ITemplateOption } from '../IImage';

export const imageTemplate = {
    DEFAULT: 'default',
    ARTDIRECTION: 'art-direction',
};

export const imageTemplateOption: ITemplateOption = [
    {
        name: imageTemplate.DEFAULT,
        component: ImageDefault,
        requiredProps: ['default', 'dpr']
    },
    {
        name: imageTemplate.ARTDIRECTION,
        component: ImageArtDirection,
        requiredProps: ['default']
    }
];

function getTemplate(variant: string) {
    return imageTemplateOption.filter(option => option.name === variant)[0];
}

export function getTemplateRequiredProps(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.requiredProps;
}

export function getTemplateComponent(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.component;
}
