<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    name: "AppMain",
    components: { ProjectCard },
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
                console.log(this.projects);
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center mb-5">Tutti i progetti</h1>
        <div class="row row-cols-3 justify-content-between gy-5">
            <ProjectCard :project="project" v-for="project in projects" :key="project.id"/>
        </div>  
    </div>
</template>