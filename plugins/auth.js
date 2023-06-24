export default defineNuxtPlugin(async(nuxtApp) => {
    const headers = useRequestHeaders(['cookie'])
    const { authUser } = useAuth()

    try {
        const user = await $fetch(`/api/auth/me`,{
            headers
        })
        authUser.value = user
    } catch (error) {
        authUser.value = null
    }
})