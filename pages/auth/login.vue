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
                <button type="submit" class="btn btn-primary">
                    Login
                    <div v-if="loading" class="spinner-border spinner-border-sm ms-2 text-light" role="status">
                    </div>
                </button>
            </form>
        </div>
    </div>
</template>
<script setup>
  import { useToast } from "vue-toastification";

    const { authUser } = useAuth()
    const Toast = useToast()
    const errors = ref([])
    const loading = ref(false)
    const formData = reactive({
        password: '',
        email: '',
    })
    async function login(){
        loading.value = true
        try {
            const user = await $fetch('/api/auth/login',{
                method: "POST",
                body: formData,
            })
            authUser.value = user;
            Toast.success("You are Logged in", {})
            return navigateTo('/')
        } catch (error) {
            errors.value = Object.values(error.data.data).flat()
        } finally{
            loading.value = false
        }
    }
</script>
<style scoped>
    .wrapper{
        width: 400px;
        padding-top: 50px;
    }
</style>