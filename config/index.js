const host = process.env.NEXT_PUBLIC_HOST
const env = process.env.NODE_ENV

var strapiURL = ""
if(env == "development") {
    strapiURL = `http://${host}:1337`
} else if (env == "production") {
    strapiURL = host
}

export const server = strapiURL
export const maxTextLength = 140
export const maxSentiment = 1




