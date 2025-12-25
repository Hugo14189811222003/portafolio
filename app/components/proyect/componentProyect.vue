<template>
    <div class="background">
        <h1>Proyectos</h1>
        <h2>Una selección de mis trabajos recientes y proyectos destacados</h2>
        <div class="select">
            <div 
            v-for="(item, index) in itemSelect" 
            :key="index" 
            class="itemSelect" 
            :class="{active: activeSelect === index}"
            @click="eventActive(index)"
            >
                <span>{{ item }}</span>
            </div>
        </div>
        <transition name="slider" mode="out-in">
            <div :key="activeSelect">
                <!-- Pass the loaded data as props -->
                <ListWeb v-if="activeSelect == 0" :proyect="webProjects" />
                <ListBrand v-else :proyect="brandProjects" />
            </div>
        </transition>
        <!-- Loading Screen -->
        <div v-if="loading" class="styleLoading">
            <h1>Cargando{{ puntos }}</h1>
        </div>
    </div>
</template>

<script>
import ListWeb from './listWeb.vue';
import ListBrand from './listBrand.vue';
import { useProyectoApi } from '@/composable/proyecto/useProyectoApi';
import { useWebApi } from '@/composable/proyecto/useWebApi';
import { useMarcaApi } from '@/composable/proyecto/useMarcaApi';
import { useProyectoTecnologiaApi } from '@/composable/proyecto/useProyectoTecnologiaApi';

export default {
    components: {
        ListWeb,
        ListBrand
    },
    data () {
        return {
            activeSelect: 0,
            itemSelect: [
                'Paginas web',
                'Marcas(Branding)'
            ],
            loading: true,
            puntos: "",
            intervalpunto: null,
            webProjects: [],
            brandProjects: []
        }
    },
    async mounted() {
        this.getAllProjects();
    },
    methods: {
        eventActive(index) {
            console.log(index);
            this.activeSelect = index;
        },
        async getAllProjects() {
            this.loading = true;
            this.intervalpunto = setInterval(() => {
                this.puntos = this.puntos.length < 3 ? this.puntos + "." : "";
            }, 300);

            try {
                const user = 1;
                const proyectos = await useProyectoApi().getProyecto();
                const webs = await useWebApi().getWeb();
                const marcas = await useMarcaApi().getMarca();

                // Filter user projects
                const userProjects = proyectos.filter(p => Number(p.id_usuario) === user);
                
                // Web Projects
                const webUserProjects = userProjects.filter(item => item.tipo === 'paginas web');
                this.webProjects = await this.mapProjects(webUserProjects, webs, 'paginas web');

                // Branding Projects
                const brandUserProjects = userProjects.filter(item => item.tipo === 'branding');
                this.brandProjects = await this.mapProjects(brandUserProjects, marcas, 'branding');

            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                this.puntos = "";
                clearInterval(this.intervalpunto);
                this.loading = false;
            }
        },
        async mapProjects(projects, details, type) {
            let list = [];
            
            // Use Promise.all for parallel fetching of technologies
             const projectPromises = projects.map(async (proyecto) => {
                const tecnologias = await useProyectoTecnologiaApi().getProyectoTecnologia(proyecto.id);
                const techTags = tecnologias ? tecnologias.map(t => t.titulo) : [];
                
                // Find related details (web or marca)
                const related = details.filter(d => Number(d.id_proyecto) === Number(proyecto.id));
                
                 return related.map(detail => ({
                    id: detail.id,
                    photo: detail.img || '',
                    title: detail.titulo,
                    description: detail.descripcion,
                    webSite: detail.link_demo,
                    socialMedia: [
                        { link: type === 'branding' ? detail.link_behance : detail.link_github }
                    ],
                    lenguaje: techTags
                }));
            });

            const results = await Promise.all(projectPromises);
            return results.flat();
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/styleProyect/desktop.css';
@import '@/assets/css/styleProyect/movil.css';
</style>