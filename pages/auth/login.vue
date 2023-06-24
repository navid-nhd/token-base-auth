<template>
    <div class="">
        <div class=" wrapper m-auto">
            <div v-if="errors.length > 0 "  class="alert alert-danger" role="alert">
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <form @submit.prevent="login()">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" id="email" v-model="formData.email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control"  aria-describedby="emailHelp" id="Password" v-model="formData.password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>
<script setup>
    const errors = ref([])
    const formData = reactive({
        name: '',
        email: '',
    })
    async function login(){
        try {
            const user = await $fetch('/api/auth/login',{
                method: "POST",
                body: formData,
            })
            return navigateTo('/')
        } catch (error) {
            errors.value = Object.values(error.data.data).flat()
        }
    }
</script>
<style scoped>
    .wrapper{
        width: 400px;
        padding-top: 50px;
    }
</style>