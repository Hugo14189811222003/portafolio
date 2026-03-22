<template>
  <div class="background">
    <h1>Contacto</h1>
    <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>

    <div v-if="pending" class="styleLoading">Cargando...</div>
    <div v-else-if="error">Error al cargar información de contacto.</div>

    <main v-else class="content">

      <!-- FORMULARIO -->
      <section class="form" aria-label="Formulario de contacto">
        <h2>Envía un mensaje</h2>
        <p>Completa el formulario y te responderé en 24 horas</p>
        <form @submit.prevent="enviarMensaje" novalidate>
          <div class="inputsLabel">

            <label for="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre completo"
              v-model="name"
              autocomplete="name"
              required
            />

            <label for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              v-model="email"
              autocomplete="email"
              required
            />

            <label for="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              v-model="message"
              required
            />

            <button
              type="submit"
              class="buttonMensaje"
              :disabled="loadingPost"
              :aria-busy="loadingPost"
            >
              {{ loadingPost ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>

          </div>
        </form>
      </section>

      <!-- INFORMACIÓN DE CONTACTO -->
      <aside class="complement" aria-label="Información de contacto">
        <section class="contentContactInfo">
          <ul>
            <li class="itemContact" v-for="item in contact" :key="item.id">
              <address>
                <span class="type">
                  <span class="icon" aria-hidden="true">📧</span>
                  <a :href="`mailto:${item.email}`">{{ item.email }}</a>
                </span>
                <span class="type">
                  <span class="icon" aria-hidden="true">📞</span>
                  <a :href="`tel:${item.telefono}`">{{ item.telefono }}</a>
                </span>
                <span class="type">
                  <span class="icon" aria-hidden="true">📍</span>
                  {{ item.direccion }}
                </span>
              </address>
            </li>
          </ul>
        </section>
        <div class="ContentAction">
          <p>¿Listo para empezar?</p>
          <p>Estoy disponible para proyectos freelance y colaboraciones a largo plazo.</p>
        </div>
      </aside>

    </main>

    <!-- MODAL DE ÉXITO -->
    <div
      v-if="modalVisible"
      class="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      @click="cerrarModal"
    >
      <div class="modal-content" @click.stop>
        <span aria-hidden="true">✔️</span>
        <h2 id="modal-title">¡Mensaje enviado!</h2>
        <p>Pronto estaré contactándote.</p>
        <button @click="cerrarModal">Cerrar</button>
      </div>
    </div>

  </div>
</template>

<script setup>
const USER = 2
const config = useRuntimeConfig()

// ✅ GET con caché
const { data, pending, error } = await useContactoApi().getContacto(USER)

const contact = computed(() =>
  (data.value ?? []).map(item => ({
    email: item.email,
    telefono: item.telefono,
    direccion: item.direccion
  }))
)

// Formulario
const name       = ref('')
const email      = ref('')
const message    = ref('')
const loadingPost = ref(false)
const modalVisible = ref(false)

async function enviarMensaje() {
  if (!name.value || !email.value || !message.value) {
    alert('Por favor completa todos los campos')
    return
  }

  loadingPost.value = true
  try {
    const res = await $fetch(config.public.apiBase, {
      method: 'POST',
      body: { name: name.value, email: email.value, message: message.value }
    })

    modalVisible.value = true
    name.value    = ''
    email.value   = ''
    message.value = ''
  } catch (err) {
    alert('Error al enviar el mensaje ❌')
  } finally {
    loadingPost.value = false
  }
}

function cerrarModal() {
  modalVisible.value = false
}
</script>

<style scoped>
@import '@/assets/css/styleContacto/desktop.css';
@import '@/assets/css/styleContacto/movil.css';
</style>