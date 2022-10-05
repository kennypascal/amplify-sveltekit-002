import { readable, writable } from 'svelte/store';
import { baseUrl } from './BaseUrl.store';
/** Desktop Navigation */
// TODO: Ensure this is an accurate way to determine the url...
interface IparentCategoryTree {
    id: string;
    name: string;
}
function categorySearchUrl(
    parentCategoryId: string,
    parentCategoryTree: IparentCategoryTree[]
) {
    if (!parentCategoryTree) return undefined;
    parentCategoryTree = parentCategoryTree.filter(
        (category: IparentCategoryTree) => {
            return category.id === parentCategoryId;
        }
    );

    let category = parentCategoryTree[0];
    return category && category.id
        ? `${baseUrl}/search?cgid=${category.id}`
        : undefined;
}

function filterCategories(el: any, isDesktop: boolean = false) {
    const portType = isDesktop ? 'c_hideFromdesktop' : 'c_hideFrommobile';
    if (!el[portType]) {
        const subObj = {
            id: el.id,
            label: el.c_categoryNameoverwrite || el.name,
            categories: undefined,
            url: el.c_isClickable
                ? el.c_alternativeUrl ||
                  categorySearchUrl(el.parentCategoryId, el.parentCategoryTree)
                : null,
            hexColor: el.c_hexColor,
            imageIconnextocategory: el.c_imageIconnextocategory,
            isClickable: el.c_isClickable,
            columnNumber: el.c_columnNumber,
            tout: el['tout'] || [],
            count: el.count,
            c_hideFromdesktop: el.c_hideFromdesktop,
            c_hideFrommobile: el.c_hideFrommobile,
            isDesktop: isDesktop
        };

        // recursive if contain sub-menu
        if (el.categories) {
            let categories: any = [];
            el.categories.forEach((sub: any) => {
                categories.push(filterCategories(sub, isDesktop));
            });
            // remove empty ones and assign if sub-menu exist
            categories = categories.filter((el: any) => el);
            if (categories.length) {
                subObj.categories = categories;
            }
        }
        return JSON.parse(JSON.stringify(subObj));
    }
}

export { filterCategories };
export const desktopNav = writable([]);
export const mobileNav = writable([]);