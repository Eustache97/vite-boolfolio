<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';
export default {
    name: "ProjectsList",
    components: { ProjectCard, AppLoader },
    data() {
        return {
            descriptionMaxLength: 150,
            urlPrefix: "http://127.0.0.1:8000",
            projects: [],
            loading: false
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.urlPrefix}/api/projects`).then(resp => {
                this.projects = resp.data.results;
                console.log(this.projects);
                this.loading = false;
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center mb-5">Tutti i progetti</h1>
        <AppLoader v-if="loading"/>
        <div v-else class="row row-cols-3 justify-content-between gy-5">
            <ProjectCard :project="project" v-for="project in projects" :key="project.id"/>
        </div>  
    </div>
</template>