export interface comboboxProps {
    data: {[key: string]: string | number}[];
    labelKey: string,
    valueKey: string | number,
    selectedItem?: string | number,
    disabled?: boolean,
    placeholder?: string,
    disabledList?: (string | number)[],
    nodataMsg?: string,
    noSearchMsg?: string,
    isFirstCheckedEvent?: boolean
}