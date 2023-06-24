<template>
    <div class="">
        <div class=" wrapper m-auto">
            <div v-if="errors.length > 0 "  class="alert alert-danger" role="alert">
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <form @submit.prevent="register">
                <div class="mb-3">
                    <label for="name" class="form-label">Name </label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" id="name" v-model="formData.name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" id="email" v-model="formData.email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control"  aria-describedby="emailHelp" id="Password" v-model="formData.password">
                </div>
                <div class="mb-3">
                    <label for="c_password" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="c_password" v-model="formData.c_password">
                </div>
                <button :disabled="loading" type="submit" class="btn btn-primary">Register
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
        name: '',
        email: '',
        password: '',
        c_password: '',
    })
    async function register(){
        loading.value = true
        try {
            const user = await $fetch('/api/auth/register',{
                method: "POST",
                body: formData,
            })
            authUser.value = user;
            Toast.success("You are Registered", {})
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