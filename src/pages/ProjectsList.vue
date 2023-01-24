<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';
import { store } from '../store';
export default {
    name: "ProjectsList",
    components: { ProjectCard, AppLoader },
    data() {
        return {
            store,
            descriptionMaxLength: 150,
            projects: [],
            currentPage: 1,
            lastPage: null,
            totalProjects: null,
            loading: false
        };
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            this.loading = true;
            axios.get(`${this.store.urlPrefix}/api/projects`, {
                params: {
                    page: page
                }
            }).then(resp => {
                this.projects = resp.data.results.data;
                console.log(this.projects);
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
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
        <nav class="navigation d-flex justify-content-between mt-4">
            <p>Trovati {{ totalProjects }} progetti</p>
            <div>
                page {{ currentPage }} di {{ lastPage }}
            </div>
            <div>
                <a class="btn btn-primary me-3" :class="currentPage === 1 ? 'disabled' : ''" href=""
                    @click.prevent="getProjects(currentPage - 1)">Prec.</a>
                <a class="btn btn-primary" :class="currentPage === lastPage ? 'disabled' : ''" href=""
                    @click.prevent="getProjects(currentPage + 1)">Succ.</a>
            </div>
        </nav> 
    </div>
</template>