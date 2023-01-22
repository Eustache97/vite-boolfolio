<script>
    import { computed } from '@vue/reactivity';
    export default{
        name: 'ProjectCard',
        data() {
            return{
                urlPrefix: "http://127.0.0.1:8000",
                descriptionMaxLength: 150
            }
        },
        props: {
            project: Object,
        },
        computed: {
            descriptionPreview() {
                if (this.project.description && this.project.description.length > this.descriptionMaxLength) {
                    return this.project.description.substr(0, this.descriptionMaxLength) + '...';
                }
                    return this.project.description;
            }
        },
    }
</script>

<template>
    <div class="col card" style="width: 18rem;">    
        <img v-if="project.cover_image" :src="`${urlPrefix}/storage/${project.cover_image}`" class="card-img-top" alt="">
        <div v-else class="w-100 bg-secondary text-white" style="height:150px">
             Nessuna immagine
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text text-secondary">{{ descriptionPreview }}</p>
        </div>
        <a href="#" class="btn btn-primary">Vedi</a>
    </div>
</template>

<style lang="scss">
</style>