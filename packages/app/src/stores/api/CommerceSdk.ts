import axios from 'axios';
import { Customer, Product, Search, slasHelpers } from 'commerce-sdk';
import type { ICommerceConfig, ICommerceSearchParams } from '../types';
import {
    BASE_URL, SANDBOX_DOMAIN, SFCC_CLIENT_ID,
    SFCC_CLIENT_SECRET,
    SFCC_ORG_ID,
    SFCC_SHORT_CODE,
    SFCC_SITE_ID
} from './creds';
import EinsteinAPI from './Einstein';

export interface Category {
    categories: [];
    id: string;
    name: string;
}

const redirectURI = `${BASE_URL}/on/demandware.store/Sites-SaksOff5th-Site/default/SLASCallback-RetrieveCode`;

const commerceConfig: ICommerceConfig = {
    headers: {
        authorization: ''
    },
    parameters: {
        clientId: SFCC_CLIENT_ID,
        organizationId: SFCC_ORG_ID,
        shortCode: SFCC_SHORT_CODE,
        siteId: SFCC_SITE_ID
    }
};

export class CommerceSdk {
    static access_token: string;
    static isSetup: boolean;
    static refresh_token: string;
    static refreshTokenRegisteredStorageKey = 'cc-nx';
    static refreshTokenGuestStorageKey = 'cc-nx-g';
    static dwSessionIdKey = 'dwsid';
    static REFRESH_TOKEN_COOKIE_AGE = 90;
    static isRegistered = false;
    static prefetchedMiniCartData = false;
    static usid: string;
    static encUserId: string;

    static async setup() {
        if (!this.isSetup) {
            await this.getGuestCommerceUserAuthToken();
            setTimeout(() => {
                this.isSetup = false;
            }, this.REFRESH_TOKEN_COOKIE_AGE * 1000 * 60);
        }
    }

    static async getGuestCommerceUserAuthToken() {
        try {
            const { access_token, refresh_token, usid, enc_user_id } =
                await slasHelpers.loginGuestUser(
                    new Customer.ShopperLogin(commerceConfig),
                    { redirectURI }
                );

            commerceConfig.headers = {
                authorization: 'Bearer ' + access_token
            };
            this.access_token = 'Bearer ' + access_token;
            this.refresh_token = refresh_token;
            this.encUserId = enc_user_id;
            this.usid = usid;
            this.isSetup = true;
        } catch (e: any) {
            console.error('AUTH FAILED (isomorphic)', e);
        }
    }
    static async getMiniCart() {
        let url = `${SANDBOX_DOMAIN}/on/demandware.store/Sites-SaksOff5th-Site/en_US/Cart-MiniCartShowData`;
        if (this.prefetchedMiniCartData === false) {
            await this.setup();
            
            const { data } = await axios({
                method: 'GET',
                url: url
                , withCredentials: true,
                headers: { Cookie: `` }
});
            console.log('Pre-fetching cart data');
            this.prefetchedMiniCartData = data;
            return data;
        }
        return this.prefetchedMiniCartData;
    }

    static async loginCustomer(): Promise<any> {
        const options = {
            headers: {
                Authorization: '',
                'Content-Type': `application/x-www-form-urlencoded`
            },
            parameters: {
                redirect_uri: redirectURI,
                client_id: SFCC_CLIENT_ID,
                code_challenge: 'b9kkhbdskBHkwX9lxXXIcmL6APn1-u9WkSX_psTHnYQ',
                response_type: 'code',
                hint: 'guest'
            }
        };
        const shopperLogin = new Customer.ShopperLogin(commerceConfig);
        const response = await shopperLogin.authorizeCustomer(options, true);
    }

    static async getCategories(): Promise<any[]> {
        await this.setup();

        let categories: any[] = [];
        try {
            const products = new Product.ShopperProducts(commerceConfig);
            const { data } = await products.getCategories({
                parameters: { ids: 'root', levels: 2, locale: 'en-US' }
            });

            if (data[0]?.categories) categories = data[0].categories;
            categories = categories.filter(c => c);

            const levels = await Promise.all(
                categories.map(
                    async category =>
                        await products.getCategories({
                            parameters: {
                                ids: category.id,
                                levels: 2,
                                locale: 'en-US'
                            }
                        })
                )
            );
            categories.forEach(
                (category: any, index: number) =>
                    (category.categories = levels[index].data[0].categories)
            );
        } catch (e) {
            console.error('FAILED TO GET CATEGORIES (isomorphic)', e);
        }

        return categories;
    }

    static async getSearchSuggestions(searchTerm: string): Promise<any> {
        await this.setup();
        const search = new Search.ShopperSearch(commerceConfig);
        try {
            const data = await search.getSearchSuggestions({
                parameters: { q: searchTerm }
            });
            return data;
        } catch (e) {
            console.log(e);

            return { error: 'No search suggestion found' };
        }
    }
}
