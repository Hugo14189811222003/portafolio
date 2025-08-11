<template>
  <div class="plastaNegra">
    <div class="flip-card" onclick="this.classList.toggle('flipped')">
      <div class="face flip-card-front boxUnique1">
        <h1 class="title">Desarrollador de Software</h1>
      </div>
      <div class="flip-card-back boxUnique1">
        <p><strong>Back:</strong> Especializado en la creación de APIs eficientes y escalables.</p>
        <p><strong>Front:</strong> Desarrollo de interfaces web modernas y atractivas.</p>
      </div>
    </div>
    <div class="flip-card" onclick="this.classList.toggle('flipped')">
      <div class="face flip-card-front boxUnique2">
        <h1 class="title">Diseñador de interfaces</h1>
      </div>
      <div class="flip-card-back boxUnique2">
        <p><strong>UX/UI:</strong> Especializado en la creación de interfaces de usuario intuitivas y atractivas.</p>
      </div>
    </div>
    <div class="flip-card" onclick="this.classList.toggle('flipped')">
      <div class="face flip-card-front boxUnique3">
        <h1 class="title">Diseñador grafico</h1>
      </div>
      <div class="flip-card-back boxUnique3">
        <p><strong>Branding:</strong> Especializado en la creación de marcas fuertes y memorables</p>
        <p><strong>Textil:</strong> Diseño de camisas deportivas personalizadas.</p>
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