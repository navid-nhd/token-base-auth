<template>
    <div>

    </div>
</template>
<script setup>
    const headers = useRequestHeaders(['cookie'])
    const {data:posts,error } = await useFetch('/api/auth/posts',{
        headers
    })
    console.log(posts)
</script>