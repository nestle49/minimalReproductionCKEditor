let id = 1

/** Use for client logic only */
export const getUniqueId = (): number => {
    return id++
}
