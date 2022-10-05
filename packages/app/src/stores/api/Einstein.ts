/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { Service } from '../Service';
import { CommerceSdk } from './CommerceSdk';
import { EINSTEIN_CLIENT_ID, EINSTEIN_ID } from './creds';

interface Product {
    id: string;
    sku: string;
    altId: string;
    altIdType: string;
}

interface RecommenderDetails {
    __recoUUID: string;
    recommenderName: string;
}

interface EinsteinAPIConfig {
    einsteinId: string;
    clientId: string;
}
const einsteinConfig: EinsteinAPIConfig = {
    einsteinId: EINSTEIN_ID,
    clientId: EINSTEIN_CLIENT_ID
};
class EinsteinAPI {
    static homepageRecommended: string = 'products-in-all-categories-Homepage';

    static async einsteinFetch(endpoint: string, method: string, body: any) {
        const { clientId } = einsteinConfig;
        const host = `https://api.cquotient.com/v3`;

        const headers = {
            'Content-Type': 'application/json',
            'x-cq-client-id': clientId
        };

        const data = await Service.get(host + endpoint, headers);

        return data;
    }

    static async getRecommenders() {
        const endpoint = `/personalization/recommenders/${einsteinConfig.einsteinId}`;
        const method = 'GET';
        const body = null;

        return this.einsteinFetch(endpoint, method, body);
    }

    static async getRecommendations(recommenderName: string, args?: any) {
        const endpoint = `/personalization/recs/${einsteinConfig.einsteinId}/${recommenderName}`;
        const method = 'POST';
        const body = { ...args };

        // Fetch the recommendations
        return this.einsteinFetch(endpoint, method, body);
    }

    static async getHomepageRecommendations() {
        return this.getRecommendations(this.homepageRecommended);
    }
}

export default EinsteinAPI;
