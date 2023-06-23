export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    try {
        const user = await $fetch('http://localhost:8000/api/register',{
            method: 'POST',
            body,
            headers : {
                accept : 'application/json'
            }
        })
        return user
    } catch (error) {
        return error
    }
})