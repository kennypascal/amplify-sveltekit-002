import { default as cx } from 'classnames';
import { buttonTemplate } from './TemplateOptions';

function getButtonSizeStyle(size: string, variant: string) {
    if (
        variant === buttonTemplate.PRIMARY ||
        variant === buttonTemplate.SECONDARY
    ) {
        switch (size) {
            case 'sm':
                return ['tw-text-1', 'tw-py-1.5', 'tw-px-5'];
            case 'md':
                return ['tw-text-2', 'tw-py-2', 'tw-px-7'];
        }
    } else {
        return ['tw-p-2'];
    }
}

function getButtonVariantStyle(variant: string, size: string) {
    const baseTextStyles = [
        'tw-uppercase',
        'tw-tracking-[1.5px]',
        'tw-font-medium',
        'tw-rounded-sm',
        'tw-transition-colors',
        'disabled:tw-text-mid-gray',
        'disabled:tw-bg-tin',
        'disabled:tw-border-tin'
    ];
    switch (variant) {
        case buttonTemplate.PRIMARY:
            return [
                ...baseTextStyles,
                'tw-text-white',
                'tw-bg-black',
                'tw-border-black',
                'hover:tw-bg-accent',
                'hover:tw-text-white',
                'hover:tw-border-accent',
                size === 'sm' ? 'tw-border' : 'tw-border-2'
            ];

        case buttonTemplate.SECONDARY:
            return [
                ...baseTextStyles,
                'tw-text-black',
                'tw-bg-white',
                'tw-border-dark-gray',
                'hover:tw-bg-dark-gray',
                'hover:tw-text-white',
                size === 'sm' ? 'tw-border' : 'tw-border-2'
            ];
        default:
            return ['disabled:tw-opacity-50'];
    }
}

function getButtonClassName(variant: string) {
    return `btn btn-${variant}`;
}

function getAriaLabel(variant: string) {
    switch (variant) {
        case buttonTemplate.CLOSE:
            return { 'aria-label': 'Close' };
        default:
            return {};
    }
}

export function createAttributes(
    variant: string,
    size: string,
    block: boolean,
    classNames: string,
    disabled: boolean,
    restProps: any
) {
    restProps && restProps.slot && delete restProps.slot;
    return {
        ...restProps,
        disabled,
        class: cx(
            getButtonClassName(variant),
            classNames,
            getButtonSizeStyle(size, variant),
            getButtonVariantStyle(variant, size),
            {
                'tw-block tw-w-full': block
            }
        ),
        ...getAriaLabel(variant)
    };
}
