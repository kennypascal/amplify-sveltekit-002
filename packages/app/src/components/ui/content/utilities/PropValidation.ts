import { contentVariantTypes, type IContentProps } from '../IContent';

/**
 * Checks the props to ensure they meet the requirements for each variant type.
 *  @return {boolean} Returns true if the required props are valid.
 */
export function validateProps(
    props: IContentProps,
    requiredProps: string[],
    componentName: string = 'Content',
){
    // return true; // TODO: modify this function for home2up
    let isMissingProps: string[] = [];
    /** Validate the variant */
    const compare = (element: string) => element === props.variant;
    if (!props.variant || !contentVariantTypes.some(compare)) {
        isMissingProps.push('variant');
        variantError(componentName);
    }else if (props.options && requiredProps) {
        /** Validate the variant options */
        requiredProps.map(
            requiredProp => {
                // Here we check the properties inside each content element
                if (requiredProp.includes('appJSON.content') && props.options.appJSON && props.options.appJSON.content)
                    return props.options.appJSON.content.forEach((element: any) => {
                        // Here we concat 'appJSON.content.' to each key inside content so is more transparent to see 
                        // the structure of the props and easier to define the required props.
                        let keys = getKeys(element).map(key => {
                            return key = 'appJSON.content.' + key;
                        });
                        !keys.includes(requiredProp) &&
                        isMissingProps.push(requiredProp) 
                    });
                return !getKeys(props.options).includes(requiredProp) &&
                isMissingProps.push(requiredProp);
            }
        );
        isMissingProps.length &&
            optionsError(componentName, props, isMissingProps);
    }
    return !isMissingProps.length;
}

/**
 * This function allows to get all the keys: potential current problems -> recursive objects and might contains repeated elements.
 * @param obj the keys we whant to check.
 * @param prev this allows the function to be recursive.
 * @returns a string with all the keys.
 */
function getKeys(obj: {[key: string] : any}, prev: string|null=null) {
    return Object.keys(obj).reduce((acc: string[], cur: string) => {
        const newElem: string = prev ? `${prev}.${cur}` : cur;
        acc.push(newElem);
        if(typeof obj[cur] === 'object')
            acc.push(...getKeys(obj[cur], newElem));
  
        return acc;
    }, [])
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
 * @param props The props of the Content component. This is used to get the corresponding variant.
 * @param isMissingProps The string with all the props missing.
 */
function optionsError(
    componentName: string,
    props: IContentProps,
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