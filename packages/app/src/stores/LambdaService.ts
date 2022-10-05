import axios, { Axios, AxiosError } from 'axios';

import { lambdabaseUrl } from './BaseUrl.store';
import { Service } from './Service';

export class LambdaService {
    static baseUrl = lambdabaseUrl;

    static async getCategories() {
        console.log('KPCOM', this.baseUrl);
        const result = await Service.get(
            `${this.baseUrl}/cache-content/categories/default`
        );
        const response = { result: result.contentCache.Response };
        return response;
    }
    static async getContentAssetId(content_asset_id: string) {
        if (content_asset_id == '') return { result: null };
        const url_content_asset = `/content/${content_asset_id}`;
        return await Service.get(`${this.baseUrl}${url_content_asset}`);
    }

    static async getAuth(refreshToken?: string) {
        /**
         * First the refreshToken=''. So, then if the request
         */
        let url = refreshToken ? `/user/oauth2/token` : `/guest/oauth2/token`;
        console.log(this.baseUrl + url);
        return await Service.post(this.baseUrl + url, { refreshToken });
    }
}
