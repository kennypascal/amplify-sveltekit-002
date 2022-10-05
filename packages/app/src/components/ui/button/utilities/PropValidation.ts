import type { IButtonProps } from '../IButton';

/**
 * Checks the props to ensure they meet the requirements for each variant type.
 *  @return {boolean} Returns true if the required props are valid.
 */
export function validateProps(
    props: IButtonProps,
    requiredProps: string[],
    componentName: string = 'Component'
) {
    let isMissingProps: string[] = [];
    /** Validate the variant */
    if (!props.variant) {
        isMissingProps.push('variant');
        variantError(componentName);
    } else if (props.options && requiredProps) {
        /** Validate the variant options */
        requiredProps.map(
            requiredProp =>
                !Object.keys(props.options).includes(requiredProp) &&
                isMissingProps.push(requiredProp)
        );
        isMissingProps.length &&
            optionsError(componentName, props, isMissingProps);
    }

    return !isMissingProps.length;
}

function variantError(componentName: string) {
    logError(
        `<${componentName} variant={...}> is missing the prop \`variant\` which is required.\n`
    );
}

function optionsError(
    componentName: string,
    props: IButtonProps,
    isMissingProps: string[]
) {
    logError(
        `<${componentName} variant='${
            props.variant
        }' options={{${isMissingProps.join()}}} /> is missing required options: ${isMissingProps.join()}\n`
    );
}

function logError(message: string) {
    console.error(message);
}
