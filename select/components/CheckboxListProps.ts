export interface CheckboxListProps {
    data: {[key: string]: string | number}[];
    labelKey: string,
    valueKey: string | number,
    checkedList?: (string | number)[],
    disabledList?: (string | number)[],
    isFirstCheckedEvent?: boolean
};