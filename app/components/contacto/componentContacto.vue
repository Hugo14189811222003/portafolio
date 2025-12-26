<template>
  <div class="background">
    <h1>Contacto</h1>
    <h2>¿Tienes un proyecto en mente? ¡Hablemos!</h2>
    <div class="content">

      <!-- FORMULARIO -->
      <div class="form">
        <h3>Envía un mensaje</h3>
        <h4>Completa el formulario y te responderé en 24 horas</h4>
        <div class="inputsLabel">
          <label for="name">Nombre</label>
          <input type="text" id="name" placeholder="Tu nombre completo" v-model="name"/>

          <label for="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Tu correo electrónico" v-model="email"/>

          <label for="textarea">Mensaje</label>
          <textarea name="text" id="textarea" placeholder="Escribe tu mensaje" v-model="message"></textarea>

          <button class="buttonMensaje" @click="enviarMensaje">Enviar Mensaje</button>
          <div class="loading" v-if="loading" style="margin-top: 10px; color: #3C83F6; text-align: center;">Enviando...</div>
        </div>
      </div>

      <!-- INFORMACIÓN DE CONTACTO -->
      <div class="complement">
        <div class="contentContactInfo">
          <div class="itemContact" v-for="item in contact" :key="item.id">
            <div class="containerContact">
              <div class="textInfo">
                <span class="type"><span class="icon">{{ iconCorreo }}</span>{{ item.email }}</span>
                <span class="type"><span class="icon">{{ iconTelefono }}</span>{{ item.telefono }}</span>
                <span class="type"><span class="icon">{{ iconUbicacion }}</span>{{ item.direccion }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ContentAction">
          <span>¿Listo para empezar?</span>
          <span>Estoy disponible para proyectos freelance y colaboraciones a largo plazo.</span>
        </div>
      </div>

    </div>

    <!-- MODAL DE ÉXITO -->
    <div v-if="modalVisible" class="modal-overlay" @click="cerrarModal">
      <div class="modal-content" @click.stop>
        <span class="checkmark">✔️</span>
        <h3>¡Mensaje enviado!</h3>
        <p>Pronto estaré contactándote.</p>
        <button @click="cerrarModal">Cerrar</button>
      </div>
    </div>
    <div class="styleLoading" v-if="loadingGet">Cargando{{ puntos }}</div>
  </div>
</template>

<script>
import { useContactoApi } from '@/composable/contacto/useContactoApi';
export default {
  data() {
    return {
      puntos: '',
      interval: null,
      loadingGet: false,
        loading: false,
      // Datos de contacto
      contact: [
      ],
      iconTelefono: '📞',
      iconCorreo: '📧',
      iconUbicacion: '📍',
      // Campos del formulario
      name: '',
      email: '',
      message: '',
      // Modal de éxito
      modalVisible: false
    }
  },
  async mounted() {
    await this.getContacto();
  },
  methods: {
    async getContacto() {
      try {
        this.loadingGet = true;
        this.interval = setInterval(() => {
          this.puntos += '.'
        }, 500)
        const user = 1;
        /* Obteniendo la informacion de contacto */
        const response = await useContactoApi().getContacto();
        console.log("datos obtenidos de contacto", response);
        /* Obteniendo la informacion de contacto */
        const userContacto = response.filter(item => item.id_usuario === user);
        console.log("datos obtenidos de contacto de user", userContacto);
        this.contact = userContacto.map((item) => {
          return {
            email: item.email,
            telefono: item.telefono,
            direccion: item.direccion
          }
        })
      } catch (error) {
        console.log('Error de servidor: ', error);
      } finally {
        this.loadingGet = false;
        clearInterval(this.interval);
      }
    },
    async enviarMensaje() {
        this.loading = true;
      if (!this.name || !this.email || !this.message) {
        alert('Por favor completa todos los campos'); // todavía usamos alert para error de validación
        this.loading = false;
        return;
      }

      try {
        const apiBase = this.$config.public.apiBase;

        const res = await fetch(apiBase, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        });

        if (res.ok) {
          // Mostrar modal de éxito
          this.modalVisible = true;
          // Limpiar formulario
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          alert('Error al enviar el mensaje ❌');
        }

      } catch (error) {
        console.error(error);
        alert('Error de conexión con el servidor ❌');
      } finally {
        this.loading = false;
      }
    },
    cerrarModal() {
      this.modalVisible = false;
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/styleContacto/desktop.css';
@import '@/assets/css/styleContacto/movil.css';
</style>
