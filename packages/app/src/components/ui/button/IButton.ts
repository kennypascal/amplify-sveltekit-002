export type IButtonVariantTypes =
    | 'primary'
    | 'secondary'
    | 'close'
    | 'text'
    | 'icon'
    | 'icon-text'
    | 'remove';

export type IButtonSizeTypes = 'md' | 'sm';

interface ITemplateOptionComponent {
    name: string;
    component: any;
    requiredProps: string[];
}

export type ITemplateOption = ITemplateOptionComponent[];

export interface IButtonProps {
    class: string;
    variant: IButtonVariantTypes;
    size: IButtonSizeTypes;
    disabled: boolean;
    block: boolean;
    options: {};
}
