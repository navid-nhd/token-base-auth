<template>
    <div class="">
        <div class=" wrapper m-auto">
            <form @submit.prevent="register()">
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
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>
<script setup>
    const formData = reactive({
        name: '',
        email: '',
        password: '',
        c_password: '',
    })
    async function register(){
        try {
            const user = await $fetch('/api/auth/register',{
                method: "POST",
                body: formData,
            })
        } catch (error) {
            console.log(error)
        }
        // console.log(formData)
    }
</script>
<style scoped>
    .wrapper{
        width: 400px;
        padding-top: 50px;
    }
</style>