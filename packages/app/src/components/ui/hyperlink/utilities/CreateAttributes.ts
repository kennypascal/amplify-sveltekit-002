import { default as cx } from 'classnames';

export function createAttributes(
    variant: string,
    className: string | undefined,
    external: boolean,
    restProps: {}
) {
    return {
        ...restProps,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
        class: cx(
            'link',
            'tw-inline-block',
            {
                'link-text': variant === 'default',
                'link-icon': variant === 'icon',
                'link-icon-text': variant === 'icon-text'
            },
            className ? className : ''
        )
    };
}

type variantAttributes = {
    label: string;
    icon?: string;
};

export function createVariantAttributes(options: any) {
    const attributes: variantAttributes = {
        label: options.label
    };
    if (options.icon) {
        attributes.icon = options.icon;
    }
    return attributes;
}
