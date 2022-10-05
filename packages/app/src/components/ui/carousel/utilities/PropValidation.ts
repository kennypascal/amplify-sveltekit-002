import type { ICarouselProps } from '../ICarousel';

/**
 * Checks the props to ensure they meet the requirements for each variant type.
 *  @return {boolean} Returns true if the required props are valid.
 */
export function validateProps(
    props: ICarouselProps,
    requiredProps: string[],
    componentName: string = 'Carousel',
){
    return true; // TODO: modify this function
}

 /**
  * Calls the logError function with a missing variant message.
  * @param componentName The component which is missing the variant.
  */
function variantError(componentName: string) {
    logError(
        `<${componentName} variant={...}> is missing the prop \`variant\` which is required.\n`
    );
}

/**
 * Calls the logError function with a missing props message.
 * @param componentName The name of the component.
 * @param props The props of the Carousel component. This is used to get the corresponding variant.
 * @param isMissingProps The string with all the props missing.
 */
function optionsError(
    componentName: string,
    props: ICarouselProps,
    isMissingProps: string[]
) {
    logError(
        `<${componentName} variant='${
            props.variant
        }' options={{${isMissingProps.join()}}} /> is missing required options: ${isMissingProps.join()}\n`
    );
}

/**
 * Recieves a string and logs it as an error.
 * @param message A custom string.
 */
function logError(message: string) {
    console.error(message);
}