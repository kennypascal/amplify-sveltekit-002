export type IHyperlinkVariantTypes =
    | 'default'
    | 'icon'
    | 'icon-text';

interface ITemplateOptionComponent {
    name: string;
    component: any;
    requiredProps: string[];
}

export type ITemplateOption = ITemplateOptionComponent[];

export interface IHyperlinkProps {
    class: string;
    variant: IHyperlinkVariantTypes;
    external: boolean;
    iconOnly: boolean;
    label: string;
    href: string;
    icon: string;
    options: {};
}
