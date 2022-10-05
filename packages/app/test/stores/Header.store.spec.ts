import { vi } from 'vitest';
import * as navData from '../mocks/navigationData.json';
import * as mockDesktopJson from '../mocks/desktopNavCategories.json';
import * as mockMobileJson from '../mocks/mobileNavCategories.json';

vi.mock('@stores/BaseUrl.store', () => {
    return {
        __esModule: true,
        baseUrl: 'dev'
    };
});

const navDataJson = navData.result;
const desktopNavJson = JSON.parse(JSON.stringify(mockDesktopJson));
const mobileNavJson = JSON.parse(JSON.stringify(mockMobileJson));

const filteredLv1Desktop = navDataJson
    .filter(el => el.c_showInMenu && !el.c_hideFromdesktop)
    .map(el => el.name);

const filteredLv1Mobile = navDataJson
    .filter(el => el.c_showInMenu && !el.c_hideFromMobile)
    .map(el => el.name);

describe('Header store', () => {
    describe('navData', () => {
        test('should exist and is an object', () => {
            expect(typeof navDataJson === 'object').toBeTruthy();
        });
    });

    describe('desktopNav', () => {
        test('should exist and is an object', () => {
            expect(typeof desktopNavJson === 'object').toBeTruthy();
        });

        describe('level one:', () => {
            test('should contain items with c_showInMenu: true and c_hideFromdesktop: false ', () => {
                const desktopL1Name = desktopNavJson.default.map(
                    el => el.label
                );
                expect(
                    desktopNavJson.default.length === filteredLv1Desktop.length
                ).toBeTruthy();
                expect(desktopL1Name).toEqual(filteredLv1Desktop);
            });
        });
    });

    describe('mobileNav', () => {
        test('should exist and is an object', () => {
            expect(typeof mobileNavJson === 'object').toBeTruthy();
        });

        describe('level one:', () => {
            test('should contain items with c_showInMenu: true and c_hideFromMobile: false ', () => {
                const mobileL1Name = mobileNavJson.default.map(el => el.label);
                expect(
                    mobileNavJson.default.length === filteredLv1Mobile.length
                ).toBeTruthy();
                expect(mobileL1Name).toEqual(filteredLv1Mobile);
            });
        });
    });
});
