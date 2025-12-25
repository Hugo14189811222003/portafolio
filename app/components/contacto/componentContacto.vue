<template>
    <div class="background">
        <h1>Contacto</h1>
        <h2>¿Tienes un proyecto en mente? ¡Hablemos!</h2>
        <div class="content">
            <div class="form">
                <h3>Envia un mensaje</h3>
                <h4>Completa el formulario y te responderé en 24 horas</h4>
                <div class="inputsLabel">
                    <label for="name">Nombre completo</label>
                    <input v-model="nombre"  type="text" id="name" placeholder="Tu nombre completo"/>
                    <label for="email">Correo electronico</label>
                    <input v-model="email" type="email" id="email" placeholder="Tu correo electronico"/>
                    <label for="textarea">Mensaje</label>
                    <textarea v-model="mensaje" name="text" id="textarea" placeholder="Escribe tu mensaje"></textarea>
                    <span v-if="cargando" style="text-align: center; font-size: small; margin-top: 3px;">Cargando...</span>
                    <button class="buttonMensaje" @click="enviarMensajeGmail(nombre, email, mensaje)">Enviar Mensaje</button>
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
                    <button>
                        <span>Contactame</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nombre: '',
            email: '',
            mensaje: '',
            cargando: false,
            contact: [
                { id: 1, icon: '📞', type: 'Teléfono', value: '999 415 5132' },
                { id: 2, icon: '📧', type: 'Correo electrónico', value: 'hugo.arcos141898@gmail.com' },
                { id: 3, icon: '📍', type: 'Ubicación', value: 'Mérida, Yucatán, México' }
            ],
        }
    },
    methods: {
        async enviarMensajeGmail(nombre, email, mensaje) {
            try {
                this.cargando = true;
                const res = await fetch('http://localhost:3001/enviarEmail', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            nombre: nombre,
                            email: email,
                            mensaje: mensaje
                        }
                    )
                })
                if(res.ok) {
                    this.nombre = '';
                    this.email = '';
                    this.mensaje = '';
                    alert('Mensaje enviado. Pronto lo contactaran');
                    console.log('respuesta: ', res);
                    console.log(`mensaje de ${nombre} con email ${email} mensaje ${mensaje}`)
                } else {
                    console.log('respuesta: ', res);
                    console.log(`mensaje de ${nombre} con email ${email} mensaje ${mensaje}`)
                }
            } catch (error) {
                console.log('error al tratar de enviar los datos: ' + error);
                this.error = true;
            } finally {
                this.cargando = false;
            }
        }
    }
}
</script>

<style scoped>
@import '@/assets/css/styleContacto/desktop.css';
@import '@/assets/css/styleContacto/movil.css';
</style>