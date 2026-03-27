<template>
  <canvas ref="canvas" class="shapes-canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)
let renderer, scene, camera, clock, animFrame, ro
let W = 0, H = 0
const shapes = []
let dragTarget = null, lastX = 0, lastY = 0
const raycaster = new THREE.Raycaster()

onMounted(() => {
  const section = canvas.value.parentElement
  W = section.offsetWidth
  H = section.offsetHeight

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)

  scene = new THREE.Scene()
  clock = new THREE.Clock()

  camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
  camera.position.z = 10

  scene.add(new THREE.AmbientLight(0xffffff, 0.5))

  placeShapes()

  canvas.value.addEventListener('mousedown', onDown)
  canvas.value.addEventListener('touchstart', onTouchStart, { passive: true })
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
  window.addEventListener('touchmove', onTouchMove, { passive: true })
  window.addEventListener('touchend', onUp)

  ro = new ResizeObserver(() => {
    W = section.offsetWidth
    H = section.offsetHeight
    camera.aspect = W / H
    camera.updateProjectionMatrix()
    renderer.setSize(W, H)
    placeShapes()
  })
  ro.observe(section)

  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animFrame)
  ro?.disconnect()
  canvas.value?.removeEventListener('mousedown', onDown)
  canvas.value?.removeEventListener('touchstart', onTouchStart)
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', onUp)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onUp)
  renderer?.dispose()
})

function neonMat(c1, c2) {
  const cv = document.createElement('canvas')
  cv.width = 2; cv.height = 256
  const ctx = cv.getContext('2d')
  const g = ctx.createLinearGradient(0, 0, 0, 256)
  g.addColorStop(0, c1)
  g.addColorStop(1, c2)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 2, 256)
  return new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), wireframe: true })
}

function placeShapes() {
  shapes.forEach(s => scene.remove(s.mesh))
  shapes.length = 0

  const vFov = camera.fov * Math.PI / 180
  const dist = camera.position.z
  const vh = 2 * Math.tan(vFov / 2) * dist
  const vw = vh * (W / H)
  const mx = vw / 2, my = vh / 2

  const m1 = neonMat('#FF00FB', '#8A38F5')
  const m2 = neonMat('#8A38F5', '#cc44ff')
  const m3 = neonMat('#cc44ff', '#FF00FB')

  const isMobile = W < 768

  if (isMobile) {
    // En móvil: figuras pequeñas pegadas a los bordes izq/der
    // Solo 4 figuras, tamaño reducido, X muy al extremo
    add(new THREE.BoxGeometry(.9, .9, .9),        m1,  mx * .92,  my * .45, 0)  // der arriba
    add(new THREE.TetrahedronGeometry(.8),         m2, -mx * .92,  my * .35, 0)  // izq arriba
    add(new THREE.OctahedronGeometry(.7),          m3,  mx * .92, -my * .40, 0)  // der abajo
    add(new THREE.IcosahedronGeometry(.65),        m1, -mx * .92, -my * .35, 0)  // izq abajo
  } else {
    // Desktop: figuras grandes en esquinas
    add(new THREE.BoxGeometry(1.5, 1.5, 1.5),     m1,  mx * .78,  my * .58, 0)
    add(new THREE.TetrahedronGeometry(1.3),        m2, -mx * .78,  my * .48, 0)
    add(new THREE.OctahedronGeometry(1.1),         m3,  mx * .82, -my * .55, 0)
    add(new THREE.IcosahedronGeometry(.9),         m1, -mx * .80, -my * .50, 0)
    add(new THREE.BoxGeometry(.9, .9, .9),         m2, -mx * .32,  my * .80, 0)
    add(new THREE.TorusGeometry(.72, .07, 8, 14),  m3,  mx * .30,  my * .80, 0)
  }
}

function add(geo, mat, x, y, z) {
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(x, y, z)
  mesh.rotation.set(Math.random() * 2, Math.random() * 2, 0)
  scene.add(mesh)
  shapes.push({
    mesh,
    baseY: y,
    speed: .25 + Math.random() * .3,
    phase: Math.random() * Math.PI * 2,
    rx: (Math.random() - .5) * .005,
    ry: .004 + Math.random() * .004,
  })
}

function getHit(clientX, clientY) {
  const rect = canvas.value.getBoundingClientRect()
  const nx =  ((clientX - rect.left) / rect.width)  * 2 - 1
  const ny = -((clientY - rect.top)  / rect.height) * 2 + 1
  raycaster.setFromCamera({ x: nx, y: ny }, camera)
  const hits = raycaster.intersectObjects(shapes.map(s => s.mesh))
  return hits.length ? shapes.find(s => s.mesh === hits[0].object) : null
}

function onDown(e) {
  const h = getHit(e.clientX, e.clientY)
  if (h) { dragTarget = h; lastX = e.clientX; lastY = e.clientY; canvas.value.style.cursor = 'grabbing' }
}
function onMove(e) {
  if (!dragTarget) return
  dragTarget.mesh.rotation.y += (e.clientX - lastX) * .013
  dragTarget.mesh.rotation.x += (e.clientY - lastY) * .013
  lastX = e.clientX; lastY = e.clientY
}
function onUp() {
  dragTarget = null
  if (canvas.value) canvas.value.style.cursor = 'default'
}
function onTouchStart(e) {
  const t = e.touches[0]
  const h = getHit(t.clientX, t.clientY)
  if (h) { dragTarget = h; lastX = t.clientX; lastY = t.clientY }
}
function onTouchMove(e) {
  if (!dragTarget) return
  const t = e.touches[0]
  dragTarget.mesh.rotation.y += (t.clientX - lastX) * .013
  dragTarget.mesh.rotation.x += (t.clientY - lastY) * .013
  lastX = t.clientX; lastY = t.clientY
}

function animate() {
  animFrame = requestAnimationFrame(animate)
  const t = clock.getElapsedTime()
  shapes.forEach(s => {
    s.mesh.position.y = s.baseY + Math.sin(t * s.speed + s.phase) * .28
    if (s !== dragTarget) {
      s.mesh.rotation.x += s.rx
      s.mesh.rotation.y += s.ry
    }
  })
  renderer.render(scene, camera)
}
</script>

<style scoped>
.shapes-canvas {
  position: absolute;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  pointer-events: auto;
  z-index: 0;
  cursor: default;
}
</style>