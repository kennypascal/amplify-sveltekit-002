import {
    getByTestId,
    queryByTestId,
    render,
    screen
} from '@testing-library/svelte';
import Content from '@ui/content/Content.svelte';
import { createAttributes } from '@ui/content/utilities/CreateAttributes';

describe('Content', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    test('the component renders THEN it renders without error', async () => {
        const props = {
            variant: 'content-body',
            options: {
                appJSON: 'content body'
            },
            class: 'tw-text-center'
        };
        render(Content, { props });
        const text_content = await screen.findByText('content body');
        expect(text_content).toBeInTheDocument();
        expect(text_content).toHaveClass('tw-text-center');
    });
    test('the component renders THEN it renders without error. Variant with more than one class', async () => {
        const props = {
            variant: 'content-body',
            options: {
                appJSON: 'other content body'
            },
            class: 'tw-text-center my-test-class'
        };
        render(Content, { props });
        const text_content = await screen.findByText('other content body');
        expect(text_content).toBeInTheDocument();
        expect(text_content).toHaveClass('tw-text-center');
        expect(text_content).toHaveClass(' my-test-class');
    });
    test('the component renders THEN it renders without error. Variant without classes', async () => {
        const props = {
            variant: 'content-body',
            options: {
                appJSON: 'other content body'
            }
        };
        render(Content, { props });
        const text_content = await screen.findByText('other content body');
        expect(text_content).toBeInTheDocument();
        expect(text_content).not.toHaveClass('tw-text-center');
    });
    test('the component  props fail to pass valid props THEN it should not render', () => {
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content);
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });
    test('create attributes', () => {
        const props = {
            variant: 'content-body',
            options: {
                appJSON: 'other content body'
            },
            class: 'tw-text-center my-test-class'
        };
        const result = {
            class: 'tw-text-center my-test-class',
            classNames: 'class-name',
            options: { appJSON: 'other content body' },
            variant: 'content-body'
        };

        expect(createAttributes('class-name', props)).toStrictEqual(result);
    });
});

describe('ContentBody', () => {
    const props = {
        variant: 'content-body',
        options: {
            appJSON: 'content body'
        },
        class: 'tw-text-center'
    };
    test('should render with no error', () => {
        expect(() => {
            render(Content, { props });
        }).not.toThrow();
    });
    test('when the component renders, should render with the props passed', async () => {
        render(Content, { props });
        const text_content = await screen.findByText('content body');
        expect(text_content).toBeInTheDocument();
        expect(text_content).toHaveClass('tw-text-center');
    });
    test('component with required props missing should not render', () => {
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content);
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });
    test('component with invalid props should not render', () => {
        const invalidProps = {
            variant: 'invalid-variant',
            options: {
                appJSON: 'content body'
            },
            class: 'tw-text-center'
        };
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content, { invalidProps });
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });
});

describe('LargeBanner', () => {
    const props = {
        variant: 'banner-large',
        options: {
            appJSON: {
                placement: 'center',
                image: {
                    default: 'https://picsum.photos/id/552/1440/295'
                },
                header: {
                    label: 'header'
                },
                description: {
                    label: 'description'
                },
                disclaimer: {
                    label: 'disclaimer'
                },
                promo: {
                    label: 'promo'
                },
                cta: [
                    {
                        label: 'cta',
                        href: '#1'
                    }
                ]
            }
        },
        class: 'tw-text-center'
    };
    test('should render with no error', () => {
        expect(() => {
            render(Content, { props });
        }).not.toThrow();
    });
    test('when the component renders, should render with the props passed', async () => {
        render(Content, { props });
        const header = await screen.findByText('header');
        const image = await screen.findByRole('img');
        const description = await screen.findByText('description');
        const disclaimer = await screen.findByText('disclaimer');
        const cta = await screen.findByText('cta');
        const promo = await screen.findByText('promo');
        expect(header).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(disclaimer).toBeInTheDocument();
        expect(cta).toBeInTheDocument();
        expect(promo).toBeInTheDocument();
        expect(header).toHaveClass('tw-text-center');
        expect(description).toHaveClass('tw-text-center');
        expect(disclaimer).toHaveClass('tw-text-center');
    });
    test('component with required props missing should not render', () => {
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content);
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });
    test('component with invalid props should not render', () => {
        const invalidProps = {
            variant: 'invalid-variant',
            options: {
                appJSON: 'content body'
            }
        };
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content, { invalidProps });
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });
    test('optional props not passed should not render', () => {
        const withoutOptionalProps = {
            variant: 'banner-large',
            options: {
                appJSON: {
                    placement: 'center',
                    image: {
                        default: 'https://picsum.photos/id/552/1440/295'
                    },
                    header: {
                        label: 'header'
                    },
                    cta: [
                        {
                            label: 'cta',
                            href: '#1'
                        }
                    ]
                }
            }
        };
        render(Content, { props: withoutOptionalProps });
        const description = document.getElementById('description');
        const disclaimer = document.getElementById('disclaimer');
        const promo = document.getElementById('promo');
        expect(description).not.toBeInTheDocument();
        expect(disclaimer).not.toBeInTheDocument();
        expect(promo).not.toBeInTheDocument();
    });
});

describe('SkinnyBanner', () => {
    const props = {
        variant: 'banner-skinny',
        options: {
            appJSON: {
                image: {
                    default: 'https://picsum.photos/id/552/1440/100'
                },
                header: {
                    label: 'Skinny Banner'
                },
                disclaimer: {
                    label: 'Disclaimer copy'
                },
                cta: [
                    {
                        label: 'Shop Now',
                        href: '#1'
                    },
                    {
                        label: 'Shop Now 2',
                        href: '#2'
                    }
                ]
            }
        },
        class: 'tw-text-center'
    };

    test('Should render with no error', () => {
        expect(() => {
            render(Content, { props });
        }).not.toThrow();
    });

    test('When the component renders, should render with the props passed', async () => {
        render(Content, { props });
        const header = await screen.findByText(
            props.options.appJSON.header.label
        );
        const image = await screen.findByRole('img');
        const disclaimer = await screen.findByText(
            props.options.appJSON.disclaimer.label
        );
        expect(header).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(disclaimer).toBeInTheDocument();
        props.options.appJSON.cta.forEach(async elem => {
            let cta = await screen.findByText(elem.label);
            expect(cta).toBeInTheDocument();
        });
    });

    test('Component with required props missing should not render', () => {
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content);
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });

    test('Component with invalid props should not render', () => {
        const invalidProps = {
            variant: 'banner-skinny',
            options: {
                appJSON: { prop: 'wrongProp' }
            }
        };
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content, { invalidProps });
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });

    test('Optional props not passed should not render', () => {
        const withoutOptionalProps = {
            variant: 'banner-skinny',
            options: {
                appJSON: {
                    image: {
                        default: 'https://picsum.photos/id/552/1440/100'
                    },
                    header: {
                        label: 'Skinny Banner'
                    },
                    cta: [
                        {
                            label: 'Shop Now',
                            href: '#1'
                        },
                        {
                            label: 'Shop Now 2',
                            href: '#2'
                        }
                    ]
                }
            }
        };
        render(Content, { props: withoutOptionalProps });
        const disclaimer = document.getElementById('disclaimer');
        expect(disclaimer).not.toBeInTheDocument();
    });
});

describe('Medium Banner', () => {
    const props = {
        variant: 'medium-banner',
        options: {
            appJSON: {
                image: {
                    default: 'https://picsum.photos/id/552/1440/295'
                },
                header: {
                    label: 'Medium Banner Header'
                },
                cta: [
                    { label: 'Click here 1', href: '' },
                    { label: 'Click here 2', href: '' },
                    { label: 'Click here 3', href: '' },
                    { label: 'Click here 4', href: '' }
                ],
                description: {
                    label: 'Description'
                },
                disclaimer: {
                    label: 'Disclaimer'
                },
                promo: {
                    label: 'promo'
                }
            }
        }
    };

    test('Should render with no error', () => {
        expect(() => {
            render(Content, { props });
        }).not.toThrow();
    });

    test('When the component renders, should render with the props passed', async () => {
        render(Content, { props });
        const header = await screen.findByText(
            props.options.appJSON.header.label
        );
        const image = await screen.findByRole('img');
        const description = await screen.findByText(
            props.options.appJSON.description.label
        );
        const disclaimer = await screen.findByText(
            props.options.appJSON.disclaimer.label
        );
        const promo = await screen.findByText(
            props.options.appJSON.promo.label
        );
        expect(header).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(disclaimer).toBeInTheDocument();
        expect(promo).toBeInTheDocument();
        props.options.appJSON.cta.forEach(async elem => {
            let cta = await screen.findByText(elem.label);
            expect(cta).toBeInTheDocument();
        });
    });

    test('Component with required props missing should not render', () => {
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content);
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });

    test('Component with invalid props should not render', () => {
        const invalidProps = {
            variant: 'medium-banner',
            options: {
                appJSON: { prop: 'wrongProp' }
            }
        };
        console.error = vi.fn();
        console.warn = vi.fn();
        render(Content, { invalidProps });
        expect(console.error).toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalled();
    });

    test('Optional props not passed should not render', () => {
        const withoutOptionalProps = {
            variant: 'medium-banner',
            options: {
                appJSON: {
                    image: {
                        default: 'https://picsum.photos/id/552/1440/100'
                    },
                    header: {
                        label: 'Medium Banner'
                    },
                    cta: [
                        {
                            label: 'Shop Now 1',
                            href: '#1'
                        },
                        {
                            label: 'Shop Now 2',
                            href: '#2'
                        }
                    ]
                }
            }
        };
        render(Content, { props: withoutOptionalProps });
        expect(() => {
            screen.getByText(props.options.appJSON.description.label);
        }).toThrow();
        expect(() => {
            screen.getByText(props.options.appJSON.promo.label);
        }).toThrow();
        expect(() => {
            screen.getByText(props.options.appJSON.disclaimer.label);
        }).toThrow();
    });
});
