export interface RadioGroupProps {
    data: {[key: string]: string | number}[];
    labelKey: string,
    valueKey: string | number,
    name?: string,
    disabledList?: (string | number)[],
    checkedItem?: string | number,
    isFirstCheckedEvent?: boolean
}
