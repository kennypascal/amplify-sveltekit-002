export type IImageVariantTypes =
    | 'default'
    | 'art-direction';

interface ITemplateOptionComponent {
    name: string;
    component: any;
    requiredProps: string[];
}

export type ITemplateOption = ITemplateOptionComponent[];

export interface IImageProps {
    class: string;
    variant: IImageVariantTypes;
    options: {};
}
