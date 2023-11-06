export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    try {
        const response = await $fetch(`${config.public.baseEtsyUrl}`, {
            headers: {
                'x-api-key': config.etsyAPIKey
            }
        })
    }
    catch(e) {
        console.log(e)
        throw createError(e)
    }
})