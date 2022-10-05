import { default as cx } from 'classnames';

export function createAttributes(
    classNames: string | undefined,
    restProps: {}
) {
    if (classNames) {
        return {
            ...restProps,
            classNames: cx(classNames)
        };
    } else {
        return {
            ...restProps
        };
    }
}
