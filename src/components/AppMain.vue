<script>
import axios from 'axios';
export default {
    name: "AppMain",
    data() {
        return {
            descriptionMaxLength: 150,
            urlPrefix: "http://127.0.0.1:8000",
            projects: []
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.urlPrefix}/api/projects`).then(resp => {
                this.projects = resp.data.results;
            });
        },
        descriptionPreview(text) {
            if (text && text.length > this.descriptionMaxLength) {
                return text.substr(0, this.descriptionMaxLength) + '...';
            }
            return text;
    }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center mb-3">Tutti i progetti</h2>
        <div class="row row-cols-3 justify-content-between gy-5">
            <div class="card" 
            v-for="project in projects" key="project.id" style="width: 18rem;">    
                <img v-if="project.cover_image" :src="`${urlPrefix}/storage/${project.cover_image}`" class="card-img-top" alt="">
                <div v-else class="w-100 bg-secondary text-white" style="height:150px">
                        Nessuna immagine
                    </div>
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ descriptionPreview(project.description) }}</p>
                    <a href="#" class="btn btn-primary">Vedi</a>
                </div>
            </div>
        </div>  
    </div>
</template>