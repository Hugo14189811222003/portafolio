<template>
    <div class="background">
        <div class="content">
            <h1>Habilidades</h1>
            <h2>Tecnologías y herramientas con las que trabajo día a día</h2>
            <div class="contentAbility">
                <div class="itemAbility" v-for="(categories, index) in skill.category" :key="index">
                    <h3>{{ categories.name }}</h3>
                    <div 
                        class="itemsContentAbility"
                        v-for="(items, index) in categories.technologies"
                        :key="index"
                        >
                    <div class="skill-header">
                        <span class="skill-name">{{ items.name }}</span>
                        <span class="skill-percent">{{ items.percent }}%</span>
                    </div>
                    <div class="skill-bar">
                        <div 
                        class="skill-progress" 
                        :style="{ width: items.percent + '%' }"
                        >
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            skill: {
                category: [
                    {
                        name: 'Front-End',
                        technologies: [
                            { name: 'Vue.js', percent: 85 },
                            { name: 'React.js', percent: 75 },
                            { name: 'Tailwind CSS', percent: 90 },
                            { name: 'HTML5/CSS', percent: 90 }
                        ]
                    },
                    {
                        name: 'Back-End',
                        technologies: [
                            { name: 'Node.js', percent: 80 },
                            { name: 'Express.js', percent: 75 },
                            { name: 'APIs REST', percent: 90 }
                        ]
                    },
                    {
                        name: 'Base de datos',
                        technologies: [
                            { name: 'MySQL', percent: 75 },
                            { name: 'MongoDB', percent: 35 },
                            { name: 'FireBase', percent: 36 }
                        ]
                    },
                    {
                        name: 'Movil',
                        technologies: [
                            { name: 'Flutter', percent: 49 },
                            { name: 'Ionic/Vue', percent: 35 },
                            { name: 'Responsive Design', percent: 89 }
                        ]
                    },
                    {
                        name: 'Herramientas',
                        technologies: [
                            { name: 'Git/GitHub', percent: 65 },
                        ]
                    },
                    {
                        name: 'Diseño',
                        technologies: [
                            { name: 'Figma', percent: 88 },
                            { name: 'UI/UX principios', percent: 92 },
                            { name: 'Responsive Design', percent: 80 },
                            { name: 'Accesibilidad', percent: 85 }
                        ]
                    },
                ]
            }
        }
    }
};
</script>

<style scoped>
@import '@/assets/css/styleHabilidades/desktop.css';
@import '@/assets/css/styleHabilidades/movil.css';
</style>