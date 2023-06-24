<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Navid.io</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <NuxtLink class="nav-link" activeClass="active-nav"  to="/">Home</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" activeClass="active-nav"  to="/">Posts</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" activeClass="active-nav"  to="/">Profile</NuxtLink>
                </li>
            </ul>
            <form class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <NuxtLink class="nav-link" activeClass="active-nav"  to="/auth/register">Register</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active-nav"  to="/auth/login">Login</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active-nav"  to="/">Logout</NuxtLink>
                    </li>
                </ul>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </div>
</template>
<style scoped>
.active-nav{
    /* color: black; */
}
</style>