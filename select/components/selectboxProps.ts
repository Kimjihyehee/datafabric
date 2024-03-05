export interface SelectboxProps {
    data: {[key: string]: string | number}[],
    labelKey: string,
    valueKey: string | number,
    selectedItem?: string | number,
    disabled?: boolean,
    disableList?: (string | number)[],
    nodataMsg?: string,
    isFirstCheckedEvent?: boolean
}
