import IconAddressBook from '../components/IconAddressBook.svelte';
import IconAlert from '../components/IconAlert.svelte';
import IconAmex from '../components/IconAmex.svelte';
import IconApp from '../components/IconApp.svelte';
import IconBackToTop from '../components/IconBackToTop.svelte';
import IconBarcode from '../components/IconBarcode.svelte';
import IconBlank from '../components/IconBlank.svelte';
import IconCamera from '../components/IconCamera.svelte';
import IconChevron from '../components/IconChevron.svelte';
import IconChevronLeft from '../components/IconChevronLeft.svelte';
import IconChevronRight from '../components/IconChevronRight.svelte';
import IconChevronUp from '../components/IconChevronUp.svelte';
import IconChinaUnion from '../components/IconChinaUnion.svelte';
import IconCircle from '../components/IconCircle.svelte';
import IconClose from '../components/IconClose.svelte';
import IconCreditCard from '../components/IconCreditCard.svelte';
import IconDiners from '../components/IconDiners.svelte';
import IconDiscover from '../components/IconDiscover.svelte';
import IconDot from '../components/IconDot.svelte';
import IconEmail from '../components/IconEmail.svelte';
import IconFacebook from '../components/IconFacebook.svelte';
import IconFastChecout from '../components/IconFastChecout.svelte';
import IconGift from '../components/IconGift.svelte';
import IconGiftCard from '../components/IconGiftCard.svelte';
import IconHamburger from '../components/IconHamburger.svelte';
import IconHbStore from '../components/IconHbStore.svelte';
import IconHeart from '../components/IconHeart.svelte';
import IconHeartO from '../components/IconHeartO.svelte';
import IconInstagram from '../components/IconInstagram.svelte';
import IconJcb from '../components/IconJcb.svelte';
import IconKlarnaLockup from '../components/IconKlarnaLockup.svelte';
import IconKlarnaLogotype from '../components/IconKlarnaLogotype.svelte';
import IconLinkedIn from '../components/IconLinkedIn.svelte';
import IconLocation from '../components/IconLocation.svelte';
import IconLock from '../components/IconLock.svelte';
import IconMastercard from '../components/IconMastercard.svelte';
import IconMinus from '../components/IconMinus.svelte';
import IconMinusThin from '../components/IconMinusThin.svelte';
import IconMyStore from '../components/IconMyStore.svelte';
import IconO5Rewards from '../components/IconO5Rewards.svelte';
import IconO5RMonogram from '../components/IconO5RMonogram.svelte';
import IconOrders from '../components/IconOrders.svelte';
import IconPayments from '../components/IconPayments.svelte';
import IconPaypal from '../components/IconPaypal.svelte';
import IconPinterest from '../components/IconPinterest.svelte';
import IconPlus from '../components/IconPlus.svelte';
import IconPlusMinusSvelte from '../components/IconPlusMinus.svelte';
import IconPlusThin from '../components/IconPlusThin.svelte';
import IconPreloader from '../components/IconPreloader.svelte';
import IconProfile from '../components/IconProfile.svelte';
import IconQuestionMark from '../components/IconQuestionMark.svelte';
import IconRewards from '../components/IconRewards.svelte';
import IconSaksStore from '../components/IconSaksStore.svelte';
import IconSearchMinusO from '../components/IconSearchMinusO.svelte';
import IconSearchO from '../components/IconSearchO.svelte';
import IconSearchPlusO from '../components/IconSearchPlusO.svelte';
import IconShare from '../components/IconShare.svelte';
import IconShoppingBag from '../components/IconShoppingBag.svelte';
import IconShoprunner from '../components/IconShoprunner.svelte';
import IconShoprunnerEligible from '../components/IconShoprunnerEligible.svelte';
import IconSnapchatFill from '../components/IconSnapchatFill.svelte';
import IconSnapchatOutline from '../components/IconSnapchatOutline.svelte';
import IconSo5 from '../components/IconSo5.svelte';
import IconStar from '../components/IconStar.svelte';
import IconText from '../components/IconText.svelte';
import IconThick from '../components/IconThick.svelte';
import IconThinBase from '../components/IconThinBase.svelte';
import IconThinSuccess from '../components/IconThinSuccess.svelte';
import IconTiktok from '../components/IconTiktok.svelte';
import IconTooltip from '../components/IconTooltip.svelte';
import IconTruefit from '../components/IconTruefit.svelte';
import IconTwitter from '../components/IconTwitter.svelte';
import IconVisa from '../components/IconVisa.svelte';
import IconWishlist from '../components/IconWishlist.svelte';
import IconYoutube from '../components/IconYoutube.svelte';

const options = [
    { name: 'address-book', component: IconAddressBook },
    { name: 'alert', component: IconAlert },
    { name: 'amex', component: IconAmex },
    { name: 'app', component: IconApp },
    { name: 'back-to-top', component: IconBackToTop },
    { name: 'barcode', component: IconBarcode },
    { name: 'blank', component: IconBlank },
    { name: 'camera', component: IconCamera },
    { name: 'chevron-left', component: IconChevronLeft },
    { name: 'chevron-right', component: IconChevronRight },
    { name: 'chevron-up', component: IconChevronUp },
    { name: 'chevron', component: IconChevron },
    { name: 'china-union', component: IconChinaUnion },
    { name: 'circle', component: IconCircle },
    { name: 'close', component: IconClose },
    { name: 'credit-card', component: IconCreditCard },
    { name: 'diners', component: IconDiners },
    { name: 'discover', component: IconDiscover },
    { name: 'dot', component: IconDot },
    { name: 'email', component: IconEmail },
    { name: 'facebook', component: IconFacebook },
    { name: 'fast-checout', component: IconFastChecout },
    { name: 'gift', component: IconGift },
    { name: 'gift-card', component: IconGiftCard },
    { name: 'hamburger', component: IconHamburger },
    { name: 'hb-store', component: IconHbStore },
    { name: 'heart', component: IconHeart },
    { name: 'heart-o', component: IconHeartO },
    { name: 'instagram', component: IconInstagram },
    { name: 'jcb', component: IconJcb },
    { name: 'klarna-lockup', component: IconKlarnaLockup },
    { name: 'klarna-logotype', component: IconKlarnaLogotype },
    { name: 'location', component: IconLocation },
    { name: 'lock', component: IconLock },
    { name: 'mastercard', component: IconMastercard },
    { name: 'minus', component: IconMinus },
    { name: 'minus-thin', component: IconMinusThin },
    { name: 'my-store', component: IconMyStore },
    { name: 'o5r-monogram', component: IconO5RMonogram },
    { name: 'o5-rewards', component: IconO5Rewards },
    { name: 'orders', component: IconOrders },
    { name: 'payments', component: IconPayments },
    { name: 'paypal', component: IconPaypal },
    { name: 'pinterest', component: IconPinterest },
    { name: 'plus', component: IconPlus },
    { name: 'plus-thin', component: IconPlusThin },
    { name: 'plus-minus', component: IconPlusMinusSvelte },
    { name: 'preloader', component: IconPreloader },
    { name: 'profile', component: IconProfile },
    { name: 'question-mark', component: IconQuestionMark },
    { name: 'rewards', component: IconRewards },
    { name: 'saks-store', component: IconSaksStore },
    { name: 'search-minus-o', component: IconSearchMinusO },
    { name: 'search-o', component: IconSearchO },
    { name: 'search-plus-o', component: IconSearchPlusO },
    { name: 'share', component: IconShare },
    { name: 'shopping-bag', component: IconShoppingBag },
    { name: 'shoprunner', component: IconShoprunner },
    { name: 'shoprunner-eligible', component: IconShoprunnerEligible },
    { name: 'snapchat-fill', component: IconSnapchatFill },
    { name: 'snapchat-outline', component: IconSnapchatOutline },
    { name: 'so5', component: IconSo5 },
    { name: 'star', component: IconStar },
    { name: 'text', component: IconText },
    { name: 'thick', component: IconThick },
    { name: 'thin-base', component: IconThinBase },
    { name: 'thin-success', component: IconThinSuccess },
    { name: 'tooltip', component: IconTooltip },
    { name: 'truefit', component: IconTruefit },
    { name: 'twitter', component: IconTwitter },
    { name: 'visa', component: IconVisa },
    { name: 'wishlist', component: IconWishlist },
    { name: 'youtube', component: IconYoutube },
    { name: 'linkedin', component: IconLinkedIn },
    { name: 'tiktok', component: IconTiktok }
];

export const getTemplateComponent = (name: string) => {
    return options.filter(option => option.name === name).pop()?.component;
};
