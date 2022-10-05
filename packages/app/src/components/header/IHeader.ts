export interface IToutComponentData {
    _v: string;
    _type: string;
    id: string;
    c_contentInnavscene7urllink: string;
    c_contentInnavurllink: string;
    c_contentTemplatesize: string;
    alt: string;
}

export interface INavLevelData {
    id: string;
    label: string;
    url: string;
    icon: string;
    hexColor: string;
    tout: IToutComponentData[];
    count: number;
    c_hideFromdesktop: boolean;
    isClickable: boolean;
    columnNumber: number;
    categories: {
        isTout: boolean;
        label: string;
        columnNumber: number;
        categories: { label: string }[];
    }[];
}
