import EinsteinRecommender from "../components/einstein-recommender/EinsteinRecommender.svelte";
import HomeCategories from "../components/home-categories/HomeCategories.svelte";
import type { ITemplateOption } from '../ICarousel';

export const carouselTemplate = {
    HOMECATEGORIES: 'home-categories',
    EINSTEINRECOMMENDER: 'einstein-recommender'
};

/**
 * The required props inside appJSON must be defined as 'appJSON.something'.
 */
export const carouselTemplateOption: ITemplateOption = [
    {
        name: carouselTemplate.HOMECATEGORIES,
        component: HomeCategories,
        requiredProps: [
            'appJSON'
        ]
    },
    {
        name: carouselTemplate.EINSTEINRECOMMENDER,
        component: EinsteinRecommender,
        requiredProps: [
            'appJSON'
        ]
    }
];

function getTemplate(variant: string) {
    return carouselTemplateOption.filter(option => option.name === variant)[0];
}

/**
 *
 * @param variant The carousel variant we whant.
 * @returns The template option and it's required props.
 */
export function getTemplateRequiredProps(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.requiredProps;
}

/**
 *
 * @param variant The carousel variant we whant.
 * @returns The template option and the component which is going to render.
 */
export function getTemplateComponent(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.component;
}
