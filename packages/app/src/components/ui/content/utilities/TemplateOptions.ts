import ContentBody from '../components/content-body/ContentBody.svelte';
import Hero from '../components/hero/Hero.svelte';
import Home2Up from '../components/home-2-up/Home2Up.svelte';
import HomeCascade from '../components/home-cascade/HomeCascade.svelte';
import HomeFourUpEditorial from '../components/home-four-up-editorial/HomeFourUpEditorial.svelte';
import HomeThreeUp from '../components/home-three-up/HomeThreeUp.svelte';
import HomeTwoXTwo from '../components/home-two-x-two/HomeTwoXTwo.svelte';
import LargeBanner from '../components/large-banner/LargeBanner.svelte';
import MediumBanner from '../components/medium-banner/MediumBanner.svelte';
import ProductCardSimple from '../components/product-card-simple/ProductCardSimple.svelte';
import ProductFull from '../components/product-full/ProductFull.svelte';
import SkinnyBanner from '../components/skinny-banner/SkinnyBanner.svelte';
import HeroNav from '../components/hero-nav/HeroNav.svelte';
import Stack from '../components/stack/Stack.svelte';
import HeroSlider from '../components/hero-slider/HeroSlider.svelte';
import type { ITemplateOption } from '../IContent';

export const contentTemplate = {
    CONTENTBODY: 'content-body',
    HOMEFOURUPEDITORIAL: 'home-four-up-editorial',
    HOMETWOXTWO: 'home-two-x-two',
    HOME2UP: 'home-2-up',
    HOMETHREEUP: 'home-three-up',
    SKINNYBANNER: 'banner-skinny',
    MEDIUMBANNER: 'medium-banner',
    LARGEBANNER: 'banner-large',
    HERO: 'hero',
    HOMECASCADE: 'home-cascade',
    PRODUCTCARDSIMPLE: 'product-card-simple',
    HERONAV: 'hero-nav',
    STACK: 'stack',
    PRODUCTFULL: 'product-full',
    HEROSLIDER: 'hero-slider'
};

/**
 * The required props inside appJSON must be defined as 'appJSON.something'.
 */
export const contentTemplateOption: ITemplateOption = [
    {
        name: contentTemplate.CONTENTBODY,
        component: ContentBody,
        requiredProps: ['appJSON']
    },
    {
        name: contentTemplate.SKINNYBANNER,
        component: SkinnyBanner,
        requiredProps: [
            'appJSON',
            'appJSON.image.default',
            'appJSON.header.label',
            'appJSON.cta'
        ]
    },
    {
        name: contentTemplate.MEDIUMBANNER,
        component: MediumBanner,
        requiredProps: [
            'appJSON',
            'appJSON.image.default',
            'appJSON.header.label',
            'appJSON.cta'
        ]
    },
    {
        name: contentTemplate.LARGEBANNER,
        component: LargeBanner,
        requiredProps: [
            'appJSON',
            'appJSON.image.default',
            'appJSON.header.label',
            'appJSON.cta'
        ]
    },
    {
        name: contentTemplate.HOMETWOXTWO,
        component: HomeTwoXTwo,
        requiredProps: [
            'appJSON',
            'appJSON.content.image.default',
            'appJSON.content.header.label',
            'appJSON.content.cta'
        ]
    },
    {
        name: contentTemplate.HOMEFOURUPEDITORIAL,
        component: HomeFourUpEditorial,
        requiredProps: [
            'appJSON',
            'appJSON.title.label',
            'appJSON.content.image.default',
            'appJSON.content.cta'
        ]
    },
    {
        name: contentTemplate.HOMETHREEUP,
        component: HomeThreeUp,
        requiredProps: [
            'appJSON',
            'appJSON.content.image.default',
            'appJSON.content.header.label',
            'appJSON.content.cta'
        ]
    },
    {
        name: contentTemplate.HOME2UP,
        component: Home2Up,
        requiredProps: [
            'appJSON',
            'appJSON.content.image.default',
            'appJSON.content.header.label',
            'appJSON.content.cta'
        ]
    },
    {
        name: contentTemplate.STACK,
        component: Stack,
        requiredProps: ['appJSON', 'appJSON.title.label']
    },
    {
        name: contentTemplate.HOMECASCADE,
        component: HomeCascade,
        requiredProps: [
            'appJSON',
            'appJSON.content.image.default',
            'appJSON.content.header.label',
            'appJSON.content.cta'
        ]
    },
    {
        name: contentTemplate.HERO,
        component: Hero,
        requiredProps: [
            'appJSON',
            'appJSON.image.default',
            'appJSON.header.label',
            'appJSON.cta'
        ]
    },
    {
        name: contentTemplate.HERONAV,
        component: HeroNav,
        requiredProps: [
            'appJSON',
            'appJSON.image.default',
            'appJSON.image.alt',
            'appJSON.cta'
        ]
    },
    {
        name: contentTemplate.PRODUCTCARDSIMPLE,
        component: ProductCardSimple,
        requiredProps: [
            'appJSON',
            'appJSON.imageUrl',
            'appJSON.url',
            'appJSON.brand',
            'appJSON.name'
        ]
    },
    {
        name: contentTemplate.PRODUCTFULL,
        component: ProductFull,
        requiredProps: [
            'appJSON',
            'appJSON.href',
            'appJSON.imageURL',
            'appJSON.brand',
            'appJSON.name',
            'appJSON.price'
        ]
    },
    {
        name: contentTemplate.HEROSLIDER,
        component: HeroSlider,
        requiredProps: []
    }
];

function getTemplate(variant: string) {
    return contentTemplateOption.filter(option => option.name === variant)[0];
}

/**
 *
 * @param variant The content variant we whant.
 * @returns The template option and it's required props.
 */
export function getTemplateRequiredProps(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.requiredProps;
}

/**
 *
 * @param variant The content variant we whant.
 * @returns The template option and the component which is going to render.
 */
export function getTemplateComponent(variant: string) {
    let templateOption = getTemplate(variant);
    return templateOption && templateOption.component;
}
