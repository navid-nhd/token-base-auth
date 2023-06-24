export default defineEventHandler(async(event) => {
    const token = getCookie(event,'token')
    const {public: {apiBase}} = useRuntimeConfig(event)

    try {
        const user = await $fetch(`${apiBase}/logout`,{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        setCookie(event,'token', '',{
            httpOnly: true,
            secure: true,
            maxAge : new Date(0),
            path : '/'
        })
        console.log(user)
    } catch (error) {
        
    }
    
    return ''
})