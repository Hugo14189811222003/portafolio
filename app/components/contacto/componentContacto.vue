<template>
    <div class="background">
        <h1>Contacto</h1>
        <h2>¿Tienes un proyecto en mente? ¡Hablemos!</h2>
        <div class="content">
            <div class="form">
                <h3>Envia un mensaje</h3>
                <h4>Completa el formulario y te responderé en 24 horas</h4>
                <div class="inputsLabel">
                    <label for="name">Nombre</label>
                    <input type="text" id="name" placeholder="Tu nombre completo"/>
                    <label for="email">Correo electronico</label>
                    <input type="email" id="email" placeholder="Tu correo electronico"/>
                    <label for="textarea">Mensaje</label>
                    <textarea name="text" id="textarea" placeholder="Escribe tu mensaje"></textarea>
                    <button class="buttonMensaje">Enviar Mensaje</button>
                </div>
            </div>
            <div class="complement">
                <div class="contentContactInfo">
                    <div class="itemContact" v-for="items in contact" :key="items.id">
                        <div class="containerContact">
                            <span class="icon">{{ items.icon }}</span>
                            <div class="textInfo">
                                <span class="type">{{ items.type }}</span>
                                <span class="value">{{ items.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ContentAction">
                    <span>¿Listo para empezar?</span>
                    <span>Estoy disponible para proyectos freelance y colaboraciones a largo plazo.</span>
                    <!-- <button>
                        <span>Contactame</span>
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            contact: [
                { id: 1, icon: '📞', type: 'Teléfono', value: '999 415 5132' },
                { id: 2, icon: '📧', type: 'Correo electrónico', value: 'hugo.arcos141898@gmail.com' },
                { id: 3, icon: '📍', type: 'Ubicación', value: 'Mérida, Yucatán, México' }
            ]
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/styleContacto/desktop.css';
@import '@/assets/css/styleContacto/movil.css';
</style>