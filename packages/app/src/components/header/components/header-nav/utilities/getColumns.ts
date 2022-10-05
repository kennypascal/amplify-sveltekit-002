import type { INavLevelData } from '@components/header/IHeader';

const getColumns = (level1: INavLevelData) => {
    const maxColumnNumber = level1.columnNumber;
    if (level1 && level1.categories) {
        /**
         * The expected number of columns is 1 - 5 so
         * any category with a columnNumber outside these
         * values will be ignored.
         */
        let categoryColumns: {}[][] = [];
        let invalidCategories: {}[] = [];
        level1.categories.map(
            (
                c: {
                    columnNumber: number;
                },
                i: number
            ) => {
                if (c.columnNumber) {
                    if (
                        c.columnNumber > maxColumnNumber ||
                        c.columnNumber < 1
                    ) {
                        invalidCategories.push(c);
                    } else {
                        if (categoryColumns[c.columnNumber - 1]) {
                            /** If the column IS defined then add the category... */
                            categoryColumns[c.columnNumber - 1].push(c);
                        } else {
                            /** If the column IS NOT yet defined then define it and add the category... */
                            categoryColumns.splice(c.columnNumber - 1, 0, [c]);
                        }
                    }
                } else {
                    /**
                     * Categories with no columnNumber defined at all
                     * are null and therefore placed in the [0] index
                     * which visually is column 1.
                     */
                    categoryColumns[0].push(c);
                    invalidCategories.push(c);
                }
            }
        );

        /** Log invalid level 1 column numbers */
        if (
            level1 &&
            level1.tout &&
            categoryColumns &&
            categoryColumns.length + level1.tout.length > 5
        ) {
            logInvalidColumnNumber(level1.id, [
                { error: 'MAX COLUMNS EXCEEDED', level1: level1 }
            ]);
        }
        /** Log invalid level 2 & 3 column numbers */
        logInvalidColumnNumber(level1.id, invalidCategories);

        return categoryColumns;
    }
    return;
};

function logInvalidColumnNumber(id: string, categories: {}[]) {
    categories.length &&
        console.warn(
            `Category <id:${id}> contains invalid columnNumber values.`,
            categories
        );
}

export default getColumns;
