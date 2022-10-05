export const carouselVariantTypes = [
    'home-categories',
    'einstein-recommender'   
] as const;

export type ICarouselVariantTypes = typeof carouselVariantTypes[number];

interface ITemplateOptionComponent {
    name: string;
    component: any;
    requiredProps: string[];
}

export type ITemplateOption = ITemplateOptionComponent[];

export interface ICarouselProps {
    class: string;
    variant: ICarouselVariantTypes;
    options: any;
}
