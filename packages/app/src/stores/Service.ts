import axios from 'axios';

const prodUrl = import.meta.env.VITE_BASE_URL_PROD;
const devUrl = import.meta.env.VITE_BASE_URL_DEV;
const env = import.meta.env.VITE_ENV;
const baseUrl = env === 'dev' ? devUrl : prodUrl;

export class Service {
    static ajax = axios.create();
    static baseUrl = baseUrl;
    static access_token = '';

    static async init() {
        this.setBaseUrl(
            'https://dev09-na03-hbc.demandware.net/on/demandware.store/Sites-SaksOff5th-Site/en_US/'
        );
    }

    static async get(url: string, headers = {}): Promise<any> {
        try {
            const d = await this.ajax.get(url, { headers });
            return d.data;
        } catch (e) {
            return { error: e };
        }
    }

    static async post(
        url: string,
        data = {},
        headers = {},
        many = false
    ): Promise<any> {
        try {
            const d = await this.ajax.post(url + (many ? '/bulk' : ''), data, {
                headers
            });
            return d.data;
        } catch (e) {
            return { error: e };
        }
    }

    static async update(url: string, data: any, headers = {}) {
        try {
            const d = await this.ajax.patch(`${url}/${data.id}`, data, {
                headers
            });
            return d.data;
        } catch (e) {
            return { error: e };
        }
    }

    static async delete(url: string, id: number, headers = {}) {
        try {
            const d = await this.ajax.delete(`${url}/${id}`, { headers });
            return { id };
        } catch (e) {
            return { error: e };
        }
    }

    static setBaseUrl(url: string) {
        this.ajax.defaults.baseURL = url;
        this.baseUrl = url;
    }

    static setBearerToken(token: string) {
        this.ajax.defaults.headers.common.Authorization = 'Bearer ' + token;
        this.access_token = token;
    }
}

Service.init();
