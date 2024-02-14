export const decimalPlace = (val: number | string) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
