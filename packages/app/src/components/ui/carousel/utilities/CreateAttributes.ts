import { default as cx } from 'classnames';

/**
 * This is for get all the atributes needed to render the component specified.
 * @param classNames The Tailwinds classes.
 * @param restProps All the options (for example: label, class, etc.).
 * @returns All the atributes the component needs to render.
 */
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

/**
 * This function is to get the default classes of any attribute of the carouse.
 * @param variant The carousel variant.
 * @returns The carousel  options.
 */
export function getOptions(variant: string, numberOfItems: number) { // TODO: use a constant, maybe ICarouselVariantTypes
    switch (variant) {
        case 'home-categories':
            return {
                perPage: 4,
                pagination: true,
                gap: '5px',
                breakpoints: {
                    1024: { perPage: 4, perMove: 4 },
                    768: { perPage: 3, perMove: 3 },
                    640: { perPage: 2, perMove: 2 },
                    420: { perPage: 1, perMove: 1 }
                }
            };
        case 'einstein-recommender':
            switch (numberOfItems) {
                case 5: {
                    return {
                        perPage: numberOfItems,
                        arrows: false,
                        breakpoints: {
                            1024: { perPage: 4, arrows: true, perMove: 4 },
                            768: { perPage: 3, arrows: true, perMove: 3 },
                            640: { perPage: 1, arrows: true, perMove: 1 }
                        }
                    };
                }
                case 4: {
                    return {
                        perPage: numberOfItems,
                        arrows: false,
                        breakpoints: {
                            768: { perPage: 3, arrows: true, perMove: 3 },
                            640: { perPage: 1, arrows: true, perMove: 1 }
                        }
                    };
                }
                case 3: {
                    return {
                        perPage: numberOfItems,
                        arrows: false,
                        breakpoints: {
                            640: { perPage: 1, arrows: true, perMove: 1 }
                        }
                    };
                }
                case 2: {
                    return {
                        perPage: numberOfItems,
                        arrows: false,
                        breakpoints: {
                            640: { perPage: 1, arrows: true, perMove: 1 }
                        }
                    };
                }
                case 1: {
                    return {
                        perPage: numberOfItems,
                        arrows: false
                    };
                }   
                default: {
                    return {
                        perPage: 5,
                        perMove: 5,
                        pagination: true,
                        breakpoints: {
                            1024: { perPage: 4, perMove: 4 },
                            768: { perPage: 3, perMove: 3 },
                            640: { perPage: 1, perMove: 1 }
                        }
                    }
                }
            }
        default:
            return {};
    }
}
