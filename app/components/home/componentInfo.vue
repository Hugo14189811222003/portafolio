<template>
  <div class="flip-card">
    <div class="flip-card-inner" onclick="this.classList.toggle('activo')">
      <div class="flip-card-front">
        <h1 class="title">Desarrollador de Software</h1>
      </div>
      <div class="flip-card-back">
        <p><strong>Back:</strong> Especializado en la creación de APIs eficientes y escalables.</p>
        <p><strong>Front:</strong> Desarrollo de interfaces web modernas y atractivas.</p>
      </div>
    </div>
    <div class="flip-card-inner" onclick="this.classList.toggle('activo')">
      <div class="flip-card-front">
        <h1 class="title">Diseñador de interfaces</h1>
      </div>
      <div class="flip-card-back">
        <p><strong>UX/UI:</strong> Especializado en la creación de experiencias de usuario atractivas y funcionales en web y móvil.</p>
      </div>
    </div>
    <div class="flip-card-inner" onclick="this.classList.toggle('activo')">
      <div class="flip-card-front">
        <h1 class="title">Diseñador grafico</h1>
      </div>
      <div class="flip-card-back">
        <p><strong>Branding:</strong> Especializado en la creación de identidades visuales atractivas y coherentes.</p>
        <p><strong>Textil:</strong> Diseño de camisas deportivas para imprentas de sublimación.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
@import '@/assets/css/styleInfo.css';
</style>