export default defineEventHandler(async (event) => {
    const { public : {apiBase}} = useRuntimeConfig()
    const token = getCookie(event,'token')

    try {
        const posts = await $fetch(`${apiBase}/posts`,{
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${token}`
        })
        return 
    } catch (error) {
        if( error.statsCode == 401 ){
        setCookie(event, 'token' , '',{
            httpOnly : true,
            secure : true ,
            maxAge : new Date(0),
            path : '/'
        })
        }
    }
})