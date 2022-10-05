export const contentVariantTypes = [
    'content-body',
    'home-four-up-editorial',
    'home-two-x-two',
    'home-2-up',
    'banner-skinny',
    'medium-banner',
    'banner-large',
    'home-cascade',
    'home-three-up',
    'product-card-simple',
    'banner-large',
    'hero-nav',
    'stack',
    'hero',
    'product-full',
    'hero-slider'
] as const;

export type IContentVariantTypes = typeof contentVariantTypes[number];

interface ITemplateOptionComponent {
    name: string;
    component: any;
    requiredProps: string[];
}

export type ILargeBannerPlacementTypes = ['center', 'right', 'left'];

export type ITemplateOption = ITemplateOptionComponent[];

export interface IContentProps {
    class: string;
    variant: IContentVariantTypes;
    options: any;
}
