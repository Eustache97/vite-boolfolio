<script>
    export default {
        name: 'NotFound',
    }
</script>

<template>
    <main>
        <div class="container not-found-container">
            <h1 class="text-center title">404 NOT FOUND</h1>
            <div class="text-center">
                <router-link :to="{ name: 'home' }" class="btn btn-primary">Torna nella pagina Home</router-link>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.not-found-container {
    padding-top: 5rem;
    .title {
        font-size: 3rem;
    }
}
</style>