export const truncateWithDots = (str, n) => (str.length <= n ? str : `${str.slice(0, n)}...`)
