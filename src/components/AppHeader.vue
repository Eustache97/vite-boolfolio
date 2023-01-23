<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navigation: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'About-Us',
                    routeName: 'about'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BoolFolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="navItem in navigation" :key="index">
                    <router-link :to="{ name: navItem.routeName }" class="nav-link" aria-current="page">{{ navItem.label }}</router-link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="http/127.0.0.1.8000/admin">Login</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

