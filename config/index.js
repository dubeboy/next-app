const host = process.env.NEXT_PUBLIC_HOST
// DO a check if prod and return the correct end point
export const server = `http://${host}:1337`
