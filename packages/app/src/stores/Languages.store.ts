import productFullEng from '../language/en/productFull.json';

export function getTranslatedText(component: string, language: string){
    switch(component){
        case 'product-full':
            switch (language) {
                default:
                    return (productFullEng);
            };
        default:
            return {};
    };
};